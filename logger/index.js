const dotenv = require('dotenv')
dotenv.config();

const youtubeLogger = require("./youtubeLogger");

let logger = null;

if (process.env.NODE_ENV !== 'production') {
  logger = youtubeLogger()
}

module.exports = logger