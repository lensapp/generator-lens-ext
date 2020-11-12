const Generator = require("yeoman-generator");
const yosay = require("yosay");
const path = require("path");

const dependencyVersions = require("./deps");

// TODO: add JS version
// const commandjs = require("./generate-ext-js");
const extTS = require("./generate-ext-ts ");
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option("extensionType", { type: String });
    this.option("extensionName", { type: String });
    this.option("extensionDescription", { type: String });
    this.option("extensionPublisher", { type: String });

    this.extensionConfig = Object.create(null);
    this.extensionConfig.installDependencies = false;
    this.extensionGenerator = undefined;
    this.abort = false;
  }

  async initializing() {

    this.log(yosay("Welcome to the Lens Extension generator!"));

    this.extensionConfig.dependencyVersions = dependencyVersions;
    this.extensionConfig.dep = function (name) {
      const version = dependencyVersions[name];
      if (typeof version === "undefined") {
        throw new Error(`Module ${name} is not listed in constant dependencyVersions \n ${JSON.stringify(version, null, 2)}`);
      }
      return `${JSON.stringify(name)}: ${JSON.stringify(version)}`;
    };
  }

  async prompting() {
    const extensionGenerators = [
      extTS
    ];

    // Ask for extension type
    const choices = [];
    for (const g of extensionGenerators) {
      const name = g.name;
      if (name) {
        choices.push({ name, value: g.id });
      }
    }
    this.extensionConfig.type = (await this.prompt({
      type: "list",
      name: "type",
      message: "What type of extension do you want to create?",
      pageSize: choices.length,
      choices,
    })).type;

    this.extensionGenerator = extensionGenerators.find(g => g.id === this.extensionConfig.type);
    try {
      await this.extensionGenerator.prompting(this, this.extensionConfig);
    } catch (e) {
      this.abort = true;
    }

  }
  // Write files
  writing() {
    if (this.abort) {
      return;
    }
    console.log("this.extensionConfig.type", this.extensionConfig.type);
    this.sourceRoot(path.join(__dirname, "./templates/" + this.extensionConfig.type));

    return this.extensionGenerator.writing(this, this.extensionConfig);
  }

  // Installation
  install() {
    if (this.abort) {
      return;
    }
    if (this.extensionConfig.installDependencies) {
      if (this.extensionConfig.pkgManager === "yarn") {
        this.spawnCommand("yarn", [], {
          cwd: this.destinationPath(`./${this.extensionConfig.name}`)
        });
      }
      if (this.extensionConfig.pkgManager === "npm") {
        this.spawnCommand("npm", ["install"], {
          cwd: this.destinationPath(`./${this.extensionConfig.name}`)
        });
      }
    }
  }

  // End
  end() {
    if (this.abort) {
      return;
    }

    // Git init
    if (this.extensionConfig.gitInit) {
      this.spawnCommand("git", ["init", "--quiet"], {
        cwd: this.destinationPath(`./${this.extensionConfig.name}`)
      });
    }

    this.log("Your extension " + this.extensionConfig.name + " has been created!");

    if (this.extensionGenerator.endMessage) {
      this.extensionGenerator.endMessage(this, this.extensionConfig);
    }

    this.log("For more information visit https://github.com/lensapp/lens.");
    this.log("\r\n");
  }
};