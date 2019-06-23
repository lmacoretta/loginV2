const { validationResult } = require('express-validator/check');
const JWT = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/User');
const helpers = require('../helpers/routeHelpers');


module.exports = {
  signUp: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {

      const user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'El usuario ya existe' }] });
      }

      const newUser = new User({ email, password });

      await newUser.save();

      res.status(201).json({ msg: 'El usuario ha sido creado' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  signIn: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errors: [{ msg: 'El usuario no existe' }] });
      }

      const isMatched = await user.isValidPassword(password);

      if (!isMatched) {
        return res.status(400).json({ errors: [{ msg: 'Los password no coinciden' }] });
      }

      const payload = { id: user._id };

      // Genero el token
      const token = helpers.signToken(payload);

      res.status(200).json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  secret: async (req, res, next) => {
    try {
      console.log('secret');
    } catch (err) { }
  }
};
