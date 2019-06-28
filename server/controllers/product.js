import Product from '../models/Product';

module.exports = {
  createProduct: async (req, res, next) => {
    try {
      const newProduct = new Product(req.body);

      await newProduct.save();

      res.status(200).json(newProduct);
    } catch (err) {
      console.error(err),
        res.status(400).json({ msg: 'Server error' });
    }
  },

  getProductById: async (req, res, next) => {
    let { item, type } = req.params;

    if (type === 'array') {
      let ids = item.split(',');
      item = [];
      item = ids.map(item => item);
    }

    try {
      //Uso el $in: porque puede ser un solo valor o un array. Busca por id.
      const products = await Product.find({ '_id': { $in: item } }).
        populate('company').
        populate('category');

      res.status(200).json(products);

    } catch (err) {
      console.error(err);
      res.status(400).json({ msg: 'Server error' });
    }
  },

  getAllProduct: async (req, res, next) => {
    try {
      const products = await Product.find();

      res.status(200).json(products);

    } catch (err) {
      console.error(err);
      res.status(400).json({ msg: 'Server error' });
    }
  },

  deleteProduct: async (req, res, next) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);

      if (!product) {
        res.status(400).json({ msg: 'No existe el producto' });
      }

      res.status(200).json({ msg: 'El producto ha sido eliminado' });
    } catch (err) {
      console.error(err);
      res.status(200).json({ msg: 'Server error' });
    }
  },

  upgradeProduct: async (req, res, next) => {
    //actualizo un producto
  }

}