const JWT = require('jsonwebtoken');

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
  }
}
