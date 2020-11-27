const { devDependencies, dependencies } = require("../../package.json");

module.exports = {
  "ts-loader": "^8.0.11",
  "webpack": "^4.44.2",
  "webpack-cli": "^3.3.11",
  "@babel/preset-env": "^7.12.7",
  "@babel/preset-react": "^7.12.7",
  "@babel/preset-typescript": "^7.12.7",
  "electron": "^11.0.3",
  "@jest-runner/electron": "^3.0.0",
  ...devDependencies,
  ...dependencies,
};
