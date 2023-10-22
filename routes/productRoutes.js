const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products', productController.create);


module.exports = router;
