const nameRegex = /^[a-z0-9][a-z0-9\-]*$/i;
const publisherRegex = /^(@[a-z0-9-~][a-z0-9-._~]*\/)[a-z0-9-~][a-z0-9-._~]*$/;

module.exports.validateExtensionName = (id) => {
  if (!id) {
    return "Missing extension name";
  }
  if (!nameRegex.test(id)) {
    return "Invalid extension name";
  }
  return true;
};

module.exports.validatePublisher = (publisher) => {
  if (!publisherRegex.test(publisher)) {
    return "Invalid publisher format, valid @<pub_name>/<pkg_name>";
  }
  return true;
};

