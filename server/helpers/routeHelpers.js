const JWT = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  signToken: payload => {
    return JWT.sign({ payload }, process.env.SECRET, { expiresIn: 360000 })
  }
}
