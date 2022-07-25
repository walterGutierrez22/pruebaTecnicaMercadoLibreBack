const ENV = process.env.NODE_ENV || "dev";
const { config } = require("../environments/" + ENV);

module.exports = {
  config
};
