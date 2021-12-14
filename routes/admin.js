const path = require('path');
const express = require('express');

// const rootDir = require('../util/path')
// const productController = require('../controllers/product')

const adminController = require('../controllers/admin');



const router = express.Router();


router.get('/admin/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/admin/products', adminController.getProducts);

// /admin/add-product => POST
// router.post('/add-product', adminController.postAddProduct);

router.get('/admin/edit-product/:productId', adminController.getEditProduct);

router.post('/admin/edit-product', adminController.postEditProduct);

router.post('/admin/delete-product', adminController.postDeleteProduct);



// router.get('/edit-product/:productId', adminController.geteditProduct)


// router.use('/add', productController.getAddproduct);

// router.get('/getproducts', adminController.getProducts);

// router.post('/product', productController.postProduct);

// exports.routes = router;
// exports.products = product;
module.exports = router