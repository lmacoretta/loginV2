import JWT from 'jsonwebtoken';
import User from '../models/User';

module.exports = {
  auth: async (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
      return res.status(401).json({ msg: 'El token no existe' });
    }

    try {
      const decode = JWT.verify(token, process.env.SECRET);

      req.user = decode.payload.user;
      next();

    } catch (err) {
      res.status(400).json({ msg: 'El token no es valido' });
    }
  },

  role: async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);

      if (user.role === 'basic' && req.method === 'GET') {
        next();
      } else {
        return res.status(401).json({ msg: 'No tenes acceso aca' });
      }

    } catch (err) {
      res.status(400).json({ msg: 'Server error' });
    }
  }
}
