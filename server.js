const http = require("http");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

let PORT = parseInt(process.env.PORT, 10) || 3001;
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
};

function safeResolve(urlPath) {
  const p = path
    .normalize(decodeURIComponent(urlPath))
    .replace(/^(\.\.[\/\\])+/, "");
  return path.join(ROOT, p);
}

function serveFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  let urlPath = req.url.split("?")[0];
  if (urlPath === "/" || urlPath === "") {
    serveFile(path.join(ROOT, "index.html"), res);
    return;
  }
  if (urlPath === "/config.json") {
    const safe = Object.fromEntries(
      Object.entries(process.env).filter(([k]) => k.startsWith("PUBLIC_"))
    );
    const data = JSON.stringify(safe);
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-cache" });
    res.end(data);
    return;
  }

  const filePath = safeResolve(urlPath);
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      serveFile(filePath, res);
    } else if (!err && stats.isDirectory()) {
      const indexPath = path.join(filePath, "index.html");
      fs.access(indexPath, fs.constants.F_OK, (e2) => {
        if (!e2) {
          serveFile(indexPath, res);
        } else {
          // SPA fallback untuk path direktori tanpa index.html
          serveFile(path.join(ROOT, "index.html"), res);
        }
      });
    } else {
      // Jika bukan permintaan asset (tanpa ekstensi), fallback ke index.html (SPA)
      const ext = path.extname(urlPath);
      if (!ext) {
        serveFile(path.join(ROOT, "index.html"), res);
      } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not Found");
      }
    }
  });
});


server.on("error", (err) => {
  if (err && err.code === "EADDRINUSE") {
    PORT = PORT + 1;
    server.listen(PORT, () => {
      console.log(`Dev server running at http://localhost:${PORT}/`);
    });
  } else {
    throw err;
  }
});

server.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}/`);
});
