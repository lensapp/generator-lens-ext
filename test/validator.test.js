/* eslint-env jest */

const { validatePublisher } = require("../generators/app/validator");

test("validatePublisher", () => {
  const msg = "Invalid publisher format, valid @<pub_name>/<pkg_name>";
  expect(validatePublisher("@publisher_name/pkg_name")).toBe(true);
  expect(validatePublisher("publisher_name/pkg_name")).toBe(msg);
  expect(validatePublisher("publisher_namepkg_name/")).toBe(msg);
  expect(validatePublisher("/publisher_namepkg_name")).toBe(msg);
  expect(validatePublisher("@publisher_namepkg_name")).toBe(msg);
  expect(validatePublisher("@publisher_name")).toBe(msg);
  expect(validatePublisher("publisher_name/pkg_name@")).toBe(msg);
  expect(validatePublisher("publisher_name@/pkg_name")).toBe(msg);
  expect(validatePublisher("pkg_name")).toBe(msg);
});
