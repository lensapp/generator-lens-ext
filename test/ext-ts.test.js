/* eslint-env jest */

const path = require("path");
const fs = require("fs");

const assert = require("yeoman-assert");
const { run } = require("yeoman-test");

test("ext-ts generator works as expected", async () => {
  const name = "my-test-ext";
  const resultPath = await run(path.join(__dirname, "../generators/app")).withPrompts({
    type: "ext-ts",
    name,
    description: "randome description",
    publisher: "random publisher",
    gitInit: true,
    pkgManager: "yarn",
    installDependencies: false
  });
  console.log("resultPath", resultPath);
  const files = [
    "README.md", "package.json", "webpack.config.js", "tsconfig.json", ".gitignore",
    "main.ts", "renderer.tsx", "page.tsx",
    ".eslintrc.js", ".eslintrc.main.js", ".eslintrc.renderer.js"
  ].map((fileName) => `${resultPath}/${name}/${fileName}`);
  assert.file(files);
  const packageJSON = JSON.parse(fs.readFileSync(`${resultPath}/${name}/package.json`, "utf8"));
  const tsconfig = JSON.parse(fs.readFileSync(`${resultPath}/${name}/tsconfig.json`, "utf8"));
  expect(packageJSON).toMatchSnapshot();
  expect(tsconfig).toMatchSnapshot();
});
