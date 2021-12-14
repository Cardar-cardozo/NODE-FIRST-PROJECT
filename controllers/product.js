const Product = require("../models/product");

const product = []

// const modelProduct = require('../models/product')

exports.getAddproduct = (req, res, next) => {
    // console.log("in the another middleware");
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    // res.sendFile(path.join(rootDir, '../', 'views', 'add-product.html'))
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/add',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });

}

exports.postProduct = (req, res, next) => {
    // console.log(req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}
exports.products = (req, res, next) => {
    const product = Product.fetchAll(product => {

            res.render('shop', {
                prods: product,
                pageTitle: 'Shop',
                path: '/',
                hasProducts: product.length > 0,
                activeShop: true,
                productCSS: true
            });
        })
        // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
}