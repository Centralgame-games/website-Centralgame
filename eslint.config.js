module.exports = [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "vendor/**",
      "**/*.min.js",
      "**/*.min.css",
      "vite.config.ts",
    ],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
    },
    rules: {},
  },
];
