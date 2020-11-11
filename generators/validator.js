const nameRegex = /^[a-z0-9][a-z0-9\-]*$/i;

module.exports.validateExtensionName = (id) => {
  if (!id) {
    return "Missing extension name";
  }
  if (!nameRegex.test(id)) {
    return "Invalid extension name";
  }
  return true;
};
