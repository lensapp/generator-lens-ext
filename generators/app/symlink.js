const os = require("os");
const { execSync } = require("child_process");

exports.symlink = (src, extName) => {
  const platform = os.platform();
  if (platform.includes("win32")) {
    // %userprofile% = C:\users\[username]
    // exec("mkdir %userprofile%\.k8slens\extensions -force");
    console.warn("generate-lens-ext doesnt support symlink on win yet.");
    console.warn("Please symlink by yourself https://docs.k8slens.dev/latest/extensions/get-started/your-first-extension/#your-first-extension");
  } else {
    // mac or linux
    const extensionsRoot = "~/.k8slens/extensions";
    execSync(`mkdir -p ${extensionsRoot}`);
    execSync(`ln -s ${src} ${extensionsRoot}/${extName}`);
    console.info(`symlinked ${src} -> ${extensionsRoot}/${extName}; platform:${platform}`);
  }
};
