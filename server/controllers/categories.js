import Category from '../models/Category';
import { validationResult } from 'express-validator/check';


module.exports = {
  createCategory: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;

    try {
      const newCategory = new Category({ name });

      newCategory.save();

      res.status(201).json({ msg: 'La categoria ha sido creada con exito' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  }
}