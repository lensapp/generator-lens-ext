const prompts = require("./prompts");

module.exports = {
  id: "ext-ts",
  name: "New Extension (TypeScript)",
  insidersName: "New Extension (TypeScript)",

  prompting: async (generator, extensionConfig) => {
    await prompts.askForExtensionName(generator, extensionConfig);
    await prompts.askForExtensionDescription(generator, extensionConfig);
    await prompts.askForExtensionPublisher(generator, extensionConfig);
    await prompts.askForGit(generator, extensionConfig);
    await prompts.askForInstallDependencies(generator, extensionConfig);
    await prompts.askForPackageManager(generator, extensionConfig);
  },

  writing: (generator, extensionConfig) => {
    const { gitInit, name } = extensionConfig;
    const { sourceRoot, fs } = generator;
    if (gitInit) {
      fs.copy(sourceRoot() + "/.gitignore", name + "/.gitignore");
    }
    fs.copyTpl(sourceRoot() + "/README.md", name + "/README.md", extensionConfig);
    fs.copyTpl(sourceRoot() + "/tsconfig.json", name + "/tsconfig.json", extensionConfig);
    fs.copyTpl(sourceRoot() + "/main.ts", name + "/main.ts", extensionConfig);
    fs.copyTpl(sourceRoot() + "/renderer.tsx", name + "/renderer.tsx", extensionConfig);
    fs.copyTpl(sourceRoot() + "/page.tsx", name + "/page.tsx", extensionConfig);
    fs.copyTpl(sourceRoot() + "/package.json", name + "/package.json", extensionConfig);
    fs.copyTpl(sourceRoot() + "/webpack.config.js", name + "/webpack.config.js", extensionConfig);

    fs.copy(sourceRoot() + "/.eslintrc.js", name + "/.eslintrc.js");
    fs.copy(sourceRoot() + "/.eslintrc.main.js", name + "/.eslintrc.main.js");
    fs.copy(sourceRoot() + "/.eslintrc.renderer.js", name + "/.eslintrc.renderer.js");

  }
};
