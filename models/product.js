const getDb = require("../util/database").getDb;
const mongodb = require('mongodb');


class Product {
    constructor(title, price, description, imageUrl, id) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.imageUrl = imageUrl;
      this._id = id;
    }
  
    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
          // Update the product
          dbOp = db
            .collection('products')
            .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
        } else {
          dbOp = db.collection('products').insertOne(this);
        }
        return dbOp
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
      }

    static fetchAll() {
        const db = getDb();
        return db
          .collection('products')
          .find()
          .toArray()
          .then(products => {
            console.log(products);
            return products;
          })
          .catch(err => {
            console.log(err);
          });
      }


      static findById(prodId) {
        const db = getDb();
        return db
          .collection('products')
          .find({ _id: new mongodb.ObjectId(prodId) })
          .next()
          .then(product => {
            console.log(product);
            return product;
          })
          .catch(err => {
            console.log(err);
          });
      }


      static deleteById(prodId) {
        const db = getDb();
        return db
          .collection('products')
          .deleteOne({ _id: new mongodb.ObjectId(prodId) })
          .then(result => {
            console.log('Deleted');
          })
          .catch(err => {
            console.log(err);
          });
      }


      
  
   
  }
  
  module.exports = Product;




// const fs = require('fs');
// const path = require('path');
// // const { products } = require('../controllers/product');
// // const product = []

// const getProductsFormfile = (cb) => {
//     const p = path.join(path.dirname(process.mainModule.filename),
//         'data', 'products.json')
//     fs.readFile(p, (err, fileContent) => {
//         if (err) {
//             // return [];
//             cb([])
//         } else {

//             cb(JSON.parse(fileContent));
//         }
//     })
// }
// module.exports = class Product {
//     // constructor(t) {
//     //     this.title = t
//     // }

//     constructor(title, imageUrl, description, price) {
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.description = description;
//         this.price = price;
//     }

//     save() {
//         this.id = Math.random().toString();
//         getProductsFormfile(product => {
//                 product.push(this);
//                 fs.writeFile(p, JSON.stringify(product), (err) => {
//                     console.log(err)
//                 })
//             })
//             // product.push(this);
//         const p = path.join(path.dirname(process.mainModule.filename),
//                 'data', 'products.json')
//             // fs.readFile(p, (err, fileContent) => {
//             //     // let product = [];
//             //     // if (!err) {
//             //     //     product = JSON.parse(fileContent);
//             //     // }

//         // })
//     }

//     static fetchAll(cb) {
//         getProductsFormfile(cb)

//     }

//     static findByid(id, cb) {

//         getProductsFormfile(product => {
//                 const products = product.find(p => p.id === id)
//                 cb(products);
//             })
//             // getProductsFormfile(product => {
//             //
//             // })
//     }
// }
