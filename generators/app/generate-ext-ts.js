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
    await prompts.askForSymlink(generator, extensionConfig);
  },

  writing: (generator, extensionConfig) => {
    const { gitInit, name } = extensionConfig;
    const { fs } = generator;
    if (gitInit) {
      fs.copy(generator.sourceRoot() + "/.gitignore", name + "/.gitignore");
    }
    fs.copyTpl(generator.sourceRoot() + "/README.md", name + "/README.md", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/tsconfig.json", name + "/tsconfig.json", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/main.ts", name + "/main.ts", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/renderer.tsx", name + "/renderer.tsx", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/components/GlobalPage.tsx", name + "/components/GlobalPage.tsx", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/components/GlobalPage.test.tsx", name + "/components/GlobalPage.test.tsx", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/components/GlobalPageMenuIcon.tsx", name + "/components/GlobalPageMenuIcon.tsx", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/components/GlobalPageMenuIcon.test.tsx", name + "/components/GlobalPageMenuIcon.test.tsx", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/components/StatusBarItemIcon.tsx", name + "/components/StatusBarItemIcon.tsx", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/components/StatusBarItemIcon.test.tsx", name + "/components/StatusBarItemIcon.test.tsx", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/package.json", name + "/package.json", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/webpack.config.js", name + "/webpack.config.js", extensionConfig);
    fs.copyTpl(generator.sourceRoot() + "/babel.config.js", name + "/babel.config.js", extensionConfig);

    fs.copy(generator.sourceRoot() + "/.eslintrc", name + "/.eslintrc");
    fs.copy(generator.sourceRoot() + "/.eslintignore", name + "/.eslintignore");

  }
};
