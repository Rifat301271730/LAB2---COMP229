const Product = require('../models/product');

exports.create = (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    published: req.body.published,
    category: req.body.category,
  });

  product.save((err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(data);
  });
};
