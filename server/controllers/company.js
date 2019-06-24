import Company from '../models/Company';

module.exports = {
  createCompany: async (req, res, next) => {
    const { name } = req.body;

    try {

      const newCompany = await new Company({ name });

      await newCompany.save();

      res.status(200).json({ msg: 'La compañia ha sido creada' });

    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  },

  getCompanys: async (req, res, next) => {
    try {
      const data = await Company.find();

      res.status(200).json({ data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
  }
}