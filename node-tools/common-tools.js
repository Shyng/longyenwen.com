const fs = require('fs');

function fileExistsSync(path) {
  try {
    fs.accessSync(path, fs.constants.F_OK);
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = {
  fileExistsSync,
  dirExistsSync(path) {
    return fileExistsSync(path) && fs.statSync(path).isDirectory();
  },
};