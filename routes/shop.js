const path = require('path');
const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');


router.get('/products', shopController.getProducts);

// router.get('/cart', shopController.getCart);

// router.post('/cart', shopController.postCart);


router.get('/products/:productId', shopController.getProduct)

// router.get('/orders', shopController.getOrders);

// router.get('/checkout', shopController.getCheckout);

router.get('/', shopController.getIndex);


// const adminData = require('./admin')
// const shopController = require('../controllers/product')


// router.get('/', shopController.products);

module.exports = router;