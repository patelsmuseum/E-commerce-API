const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products_controller');

router.get('/', productsController.products);
router.use('/products' , require('./products'));

module.exports = router;