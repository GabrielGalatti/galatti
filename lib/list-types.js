const types = require("./project-types");

module.exports = function () {
  types.map((type) => console.log(type.name));
};
