// checks if we are on production mode or not
// dev file will contain actual strings, but you will never publish this file. 
// Prod file will only reference to environment variables
if (process.env.NODE_ENV === "production") {
    module.exports = require("./prod");
  } else {
    module.exports = require("./dev");
  }