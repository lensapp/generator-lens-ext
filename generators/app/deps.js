const { devDependencies, dependencies } = require("../../package.json");

module.exports = {
  "ts-loader": "^9.2.3",
  "webpack": "^5.40.0",
  "webpack-cli": "^4.7.2",
  "@babel/preset-env": "^7.14.7",
  "@babel/preset-react": "^7.14.5",
  "@babel/preset-typescript": "^7.14.5",
  "electron": "^9.4.4",
  "@jest-runner/electron": "^3.0.1",
  ...devDependencies,
  ...dependencies,
};
