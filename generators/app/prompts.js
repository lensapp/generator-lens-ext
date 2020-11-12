const validator = require("./validator");

exports.askForExtensionName = (generator, extensionConfig) => {
  let extensionName = generator.options["extensionName"];
  if (extensionName) {
    extensionConfig.name = extensionName;
    return Promise.resolve();
  }

  return generator.prompt({
    type: "input",
    name: "name",
    message: "What's the name of your extension?",
    default: "my-ne-lens-extension",
    validate: validator.validateExtensionName
  }).then(nameAnswer => {
    extensionConfig.name = nameAnswer.name;
  });
};

exports.askForExtensionDescription = (generator, extensionConfig) => {
  let extensionDescription = generator.options["extensionDescription"];
  if (extensionDescription) {
    extensionConfig.description = extensionDescription;
    return Promise.resolve();
  }

  return generator.prompt({
    type: "input",
    name: "description",
    message: "What's the description of your extension?"
  }).then(descriptionAnswer => {
    extensionConfig.description = descriptionAnswer.description;
  });
};

exports.askForExtensionPublisher = (generator, extensionConfig) => {
  let extensionPublisher = generator.options["extensionPublisher"];
  if (extensionPublisher) {
    extensionConfig.extensionPublisher = extensionPublisher;
    return Promise.resolve();
  }

  return generator.prompt({
    type: "input",
    name: "publisher",
    message: "What's your extension's publisher name?",
    default: `@${extensionConfig.name}/${extensionConfig.name}`
  }).then(answer => {
    extensionConfig.publisher = answer.publisher;
  });
};

exports.askForGit = (generator, extensionConfig) => {
  return generator.prompt({
    type: "confirm",
    name: "gitInit",
    message: "Initialize a git repository?",
    default: true
  }).then(gitAnswer => {
    extensionConfig.gitInit = gitAnswer.gitInit;
  });
};

/**
* @param {import('yeoman-generator')} generator
* @param {Object} extensionConfig
*/
exports.askForPackageManager = (generator, extensionConfig) => {
  extensionConfig.pkgManager = "npm";
  return generator.prompt({
    type: "list",
    name: "pkgManager",
    message: "Which package manager to use?",
    choices: [
      {
        name: "npm",
        value: "npm"
      },
      {
        name: "yarn",
        value: "yarn"
      }
    ]
  }).then(pckgManagerAnswer => {
    extensionConfig.pkgManager = pckgManagerAnswer.pkgManager;
  });
};
