const { devDependencies, dependencies } = require("../../package.json");

module.exports = {
  "ts-loader": "^9.3.0",
  "webpack": "^5.72.0",
  "webpack-cli": "^4.9.21",
  "@babel/preset-env": "^7.17.10",
  "@babel/preset-react": "^7.16.7",
  "@babel/preset-typescript": "^7.16.7",
  ...devDependencies,
  ...dependencies,
};
