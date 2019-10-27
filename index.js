const fs = require('fs');

function Config (file, defaults) {
  this.file = file;
  this.config;

  try {
    this.config = this.read();
  } catch (error) {
    this.config = JSON.parse(JSON.stringify(defaults)); // clone default config.
    this.write();
  }
}

Config.prototype.write = function () {
  fs.writeFileSync(this.file, JSON.stringify(this.config, null, 2));
};

Config.prototype.read = function () {
  return JSON.parse(fs.readFileSync(this.file));
};

Config.prototype.valueOf = function () {
  return this.config;
};

module.exports = {
  __esModule: true,
  default: Config
};
