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

    if (extensionConfig.gitInit) {
      generator.fs.copy(generator.sourceRoot() + "/.gitignore", extensionConfig.name + "/.gitignore");
    }
    generator.fs.copyTpl(generator.sourceRoot() + "/README.md", extensionConfig.name + "/README.md", extensionConfig);
    generator.fs.copyTpl(generator.sourceRoot() + "/tsconfig.json", extensionConfig.name + "/tsconfig.json", extensionConfig);
    generator.fs.copyTpl(generator.sourceRoot() + "/main.ts", extensionConfig.name + "/main.ts", extensionConfig);
    generator.fs.copyTpl(generator.sourceRoot() + "/renderer.tsx", extensionConfig.name + "/renderer.tsx", extensionConfig);
    generator.fs.copyTpl(generator.sourceRoot() + "/page.tsx", extensionConfig.name + "/page.tsx", extensionConfig);
    generator.fs.copyTpl(generator.sourceRoot() + "/package.json", extensionConfig.name + "/package.json", extensionConfig);
    generator.fs.copyTpl(generator.sourceRoot() + "/webpack.config.js", extensionConfig.name + "/webpack.config.js", extensionConfig);

    generator.fs.copy(generator.sourceRoot() + "/.eslintrc.js", extensionConfig.name + "/.eslintrc.js");
    generator.fs.copy(generator.sourceRoot() + "/.eslintrc.main.js", extensionConfig.name + "/.eslintrc.main.js");
    generator.fs.copy(generator.sourceRoot() + "/.eslintrc.renderer.js", extensionConfig.name + "/.eslintrc.renderer.js");

  }
};
