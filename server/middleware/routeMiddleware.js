const { check } = require('express-validator/check');

module.exports = {
  signUp: [
    check('email').isEmail().withMessage('Por favor, incluya un email valido'),
    check('password')
      .isLength({ min: 6 }).withMessage('Por favor, ingrese un password correcto')
      .exists()
  ]
};
