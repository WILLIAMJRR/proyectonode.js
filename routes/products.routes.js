//!3

const express = require('express');

//controllers
const {
  findAllProducts,
  createProduct,
  findProductById,
  updateProduct,
  deleteProducts,
} = require('../controllers/products.controller');

//middleware
const {
  validProducts,
  validExistProduct,
} = require('../middleware/products.middleware');

// app.get('/api/v1/products', findAllProducts);
// app.post('/api/v1/products', createProduct);
// app.get('/api/v1/products/:id', findProductById);
// app.patch('/api/v1/products/:id', updateProduct);
// app.delete('/api/v1/products/:id', deleteProducts);

// es una variable que tiene todas las funcionalidades de las rutasd de express en vez de utilizar app se utiliza productRouter

//el orden en express es importantante

const productsRouter = express.Router();

productsRouter
  .route('/')
  .get(findAllProducts)
  .post(validProducts, createProduct);

productsRouter
  .route('/:id')
  .get(validExistProduct, findProductById)
  //validProducts=middleware, validExistProduct=middleware  updateProduct=controlador el orden define la ejecucion
  .patch(validProducts, validExistProduct, updateProduct)
  .delete(validExistProduct, deleteProducts);

module.exports = productsRouter;
