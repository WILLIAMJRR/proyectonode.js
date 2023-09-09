//!5

const Product = require('../models/products.model');

//validacion de datos
const validProducts = (req, res, next) => {
  const {
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
    status,
  } = req.body;

  //aqui estoy diciendo que si name,price,quintity retorna 400 si no sigue con next
  if (!name) {
    return res.status(400).json({
      msg: 'nombre es requerido',
    });
  } else if (!image) {
    return res.status(400).json({
      msg: 'imagees requerido',
    });
  } else if (!ingredients) {
    return res.status(400).json({
      msg: 'ingredients es requerido',
    });
  } else if (!quantity) {
    return res.status(400).json({
      msg: 'quantity es requerido',
    });
  } else if (!price) {
    return res.status(400).json({
      msg: 'price es requerido',
    });
  } else if (!isNew) {
    return res.status(400).json({
      msg: 'isNew es requerido',
    });
  } else if (!description) {
    return res.status(400).json({
      msg: 'description es requerido',
    });
  } else if (!status) {
    return res.status(400).json({
      msg: 'status es requerido',
    });
  }

  next();
};

const validExistProduct = async (req, res, next) => {
  const { id } = req.params;

  // aca me esta pasando el parametro de la url y lo guardo en una variable llamada id
  const product = await Product.findOne({
    where: {
      id,
      status: true,
    },
  });
  // aca estoy buscando en la base de datos si existe un producto con el id que me pasaron por parametro y que el status sea true
  if (!product) {
    return res.status(404).json({
      status: 'error',
      message: 'Producto no encontrado',
    });
  }
  // aca estoy diciendo que si no existe el producto me retorne un error 404

  req.product = product;

  next();
};

module.exports = {
  validProducts,
  validExistProduct,
};
