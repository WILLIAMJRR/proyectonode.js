//viene del modelo
const Product = require('../models/products.model');
//los controladores son los encargados de buscar en la base de datos
//!2
exports.findAllProducts = async (req, res) => {
  //el findall viene de sequealize
  const products = await Product.findAll({
    where: {
      status: true,
    },
  });
  try {
    res.status(200).json({
      status: 'success',
      message: 'Productos encontrados',
      results: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'No se pudo encontrar los productos',
    });
  }
  // const products = await Product.findAll()
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message:
  //         err.message ||
  //         'Some error occurred while retrieving tutorials.',
  //     });
  //   });

  // res.status(200).json({
  //   message: 'Hello World desde la ruta get!',
  // });
};

exports.findProductById = async (req, res) => {
  const { product } = req;

  res.status(200).json({
    status: 'success',
    message: 'Producto encontrado',
    product,
  });
};

exports.createProduct = async (req, res) => {
  //req.body es la informacion o data que se envia desde el cliente
  //!9
  const {
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  } = req.body;

  //se crea el producto

  const newProduct = await Product.create({
    //el valor del objeto sera el nombre del modelo y la key sera el valor del objeto que envie el cliente ejemplo
    // name: PRODUCTNAME
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });

  res.status(201).json({
    newProduct,
    status: 'success',
    message: 'Producto creado',
  });
};

exports.updateProduct = async (req, res) => {
  const { product } = req;

  const {
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  } = req.body;

  //respuesta de la bse de datos

  //metodo de sequalize voy actualizar el registro encontrado y lo voy a modificar del const de product

  //consulta o interactua con la base de datos se puede almacenar en una variable
  const productUpdated = await product.update({
    name,
    image,
    ingredients,
    quantity,
    price,
    isNew,
    description,
  });
  res.status(200).json({
    status: 'success',
    message: 'Producto actualizado',
    productUpdated,
  });
};

exports.deleteProducts = async (req, res) => {
  const { product } = req;

  // await product.destroy()
  const productDelete = await product.update({
    status: false,
  });
  //busca un producto por su ID y si encuentralo cambia su estado a false para que no aparezcan en las list

  res.status(200).json({
    status: 'success',
    message: 'Producto eliminado',
    productDelete,
  });
};
