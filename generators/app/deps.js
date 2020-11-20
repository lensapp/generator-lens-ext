const { devDependencies, dependencies } = require("../../package.json");

module.exports = {
  "ts-loader": "^8.0.11",
  "webpack": "^4.44.2",
  "webpack-cli": "^3.3.11",
  ...devDependencies,
  ...dependencies,
};
