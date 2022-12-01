const { devDependencies, dependencies } = require("../../package.json");

module.exports = {
  "ts-loader": "^9.4.1",
  "webpack": "^5.75.0",
  "webpack-cli": "^4.9.2",
  "@babel/preset-env": "^7.17.10",
  "@babel/preset-react": "^7.16.7",
  "@babel/preset-typescript": "^7.16.7",
  ...devDependencies,
  ...dependencies,
};
