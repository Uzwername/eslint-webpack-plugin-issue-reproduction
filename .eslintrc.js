module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    "eol-last": ["error", "always"],
  },
};
