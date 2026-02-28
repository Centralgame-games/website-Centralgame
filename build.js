const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");

const EXCLUDES = new Set([
  "node_modules",
  "dist",
  ".git",
  "server.js",
  "build.js",
  ".DS_Store",
]);

function rimraf(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readFileSafe(fp) {
  try {
    return fs.readFileSync(fp, "utf8");
  } catch {
    return "";
  }
}

function writeFileSafe(fp, content) {
  ensureDir(path.dirname(fp));
  fs.writeFileSync(fp, content);
}

function hashContent(content) {
  return crypto.createHash("sha256").update(content).digest("hex").slice(0, 8);
}

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\n/g, "")
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*:\s*/g, ":")
    .replace(/\s*,\s*/g, ",");
}

function minifyJs(js) {
  return js
    .replace(/\/\/[^\n\r]*/g, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join("\n");
}

function collectFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir)) {
    if (EXCLUDES.has(entry)) continue;
    const p = path.join(dir, entry);
    const st = fs.statSync(p);
    if (st.isDirectory()) {
      out.push(...collectFiles(p));
    } else {
      out.push(p);
    }
  }
  return out;
}

function relFromRoot(fp) {
  return path.relative(ROOT, fp).replace(/\\/g, "/");
}

function build() {
  rimraf(DIST);
  ensureDir(DIST);

  const files = collectFiles(ROOT);
  const manifest = {}; // original relative path -> fingerprinted relative path

  for (const abs of files) {
    const rel = relFromRoot(abs);
    const ext = path.extname(rel).toLowerCase();
    const destBaseDir = path.dirname(path.join(DIST, rel));
    ensureDir(destBaseDir);

    if (ext === ".css" || ext === ".js") {
      const content = readFileSafe(abs);
      const minified = ext === ".css" ? minifyCss(content) : minifyJs(content);
      const hash = hashContent(minified);
      const base = path.basename(rel, ext);
      const dirRel = path.dirname(rel);
      const fingerprintName = `${base}.${hash}${ext}`;
      const destRel = path.join(dirRel, fingerprintName).replace(/\\/g, "/");
      const destAbs = path.join(DIST, destRel);
      writeFileSafe(destAbs, minified);
      manifest[rel] = destRel;
    } else if (ext === ".html") {
      // HTML will be processed later for index.html; others copy as-is
      const destAbs = path.join(DIST, rel);
      const htmlContent = readFileSafe(abs);
      writeFileSafe(destAbs, htmlContent);
    } else {
      // Copy other assets as-is
      const destAbs = path.join(DIST, rel);
      fs.copyFileSync(abs, destAbs);
    }
  }

  // Rewrite index.html references to fingerprinted assets
  const indexSrc = path.join(ROOT, "index.html");
  let indexHtml = readFileSafe(indexSrc);
  for (const [orig, hashed] of Object.entries(manifest)) {
    // Replace href/src pointing to original with hashed path
    const origEsc = orig.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    indexHtml = indexHtml
      .replace(new RegExp(`href=["']${origEsc}["']`, "g"), `href="${hashed}"`)
      .replace(new RegExp(`src=["']${origEsc}["']`, "g"), `src="${hashed}"`);
  }
  writeFileSafe(path.join(DIST, "index.html"), indexHtml);

  // Optional: write manifest for future reference
  writeFileSafe(
    path.join(DIST, "asset-manifest.json"),
    JSON.stringify(manifest, null, 2),
  );

  console.log(`Build selesai. Folder output: ${DIST}`);
  console.log(`Fingerprint manifest ditulis ke dist/asset-manifest.json`);
}

build();
