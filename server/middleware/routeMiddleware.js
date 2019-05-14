const { check } = require('express-validator/check');

module.exports = {
  signUp: [
    check('email', 'Por favor, incluya un email valido').isEmail(),
    check('password', 'Por favor, ingrese un password correcto')
      .isLength({ min: 6 })
      .exists()
  ]
};
