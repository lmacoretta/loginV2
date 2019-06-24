const { check } = require('express-validator/check');

module.exports = {
  signUpVal: [
    check('email').isEmail().withMessage('Por favor, incluya un email valido').not().isEmpty().withMessage('El email no puede estar vacio'),
    check('password')
      .isLength({ min: 6 }).withMessage('Por favor, ingrese un password correcto')
      .exists().not().isEmpty().withMessage('El password no puede estar vacio'),
    check('name').not().isEmpty().withMessage('El nombre no puede estar vacio'),
    check('lastname').not().isEmpty().withMessage('El apellido no puede estar vacio')
  ],

  createCat: [
    check('name').isString().not().isEmpty().withMessage('Por favor, ingrese el nombre de la categoria')
  ],

  updateProfile: [
    check('email').isEmail().withMessage('Por favor, incluya un email valido').isEmpty().withMessage('El email no puede estar vacio'),
    check('password').isLength().withMessage('Por favor, ingrese un password correcto').exists().isEmpty().withMessage('El password no puede estar vacio')
  ]
}