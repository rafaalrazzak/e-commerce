const options = {
  arrowParens: "avoid",
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: "lf",
  semi: false,
  tabWidth: 2,
  trailingComma: "true",
};

module.exports = options;

module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
};
