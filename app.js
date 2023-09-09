//!1

const express = require('express');
const morgan = require('morgan');
const cors = require('cors')


const app = express();

const productRouter = require('./routes/products.routes')

//para utilizar un midleware este hace es permitir o decirle a la app que pueda entender los objetos json que llegan desde un cliente todo lo quue venga co use es midleware

//middleware ya creado de express
app.use(express.json());
//middleware de terceros
app.use(morgan('dev'));
app.use(cors())

//middleware
// app.use((req, res, next) => {
//agregamos a findAllProducts
//   req.requestTime = new Date();
//   next();
// });

//rutas de productos se concatenan la ruta con el pach del productRouter
app.use('/api/v1/products',productRouter);

module.exports = app;
