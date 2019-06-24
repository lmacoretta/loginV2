
import User from '../models/User';

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const user = await User.find();

      res.status(200).json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  getUser: async (req, res, next) => {
    try {

      const user = await User.findById(req.user.id);

      if (!user) {
        return res.status(400).json({ msg: 'El usuario no existe' });
      }

      res.status(200).json(user);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const user = await User.findByIdAndDelete(req.user.id);

      if (!user) {
        return res.status(400).json({ msg: 'El usuario no existe' });
      }

      res.status(200).json({ msg: 'El usuario ha sido eliminado' });

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  updateUser: async (req, res, next) => {
    const { email, password } = req.body;
    // Validar con los datos que voy a requerir si o si. Y tmbien validar que los datos introduccidos sean correctos y no cualquier verdura.
    try {

      const newData = { email, password };

      const user = await User.findByIdAndUpdate(req.user.id, newData);

      if (!user) {
        return res.status(400).json({ msg: 'No se encontro el usuario' });
      }

      res.status(200).json({ msg: 'Los datos han sido actualizado', user });

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
} 