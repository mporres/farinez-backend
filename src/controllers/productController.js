const Product = require('../models/productModel');

const getProducts = async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

const updateProduct = async (req, res) => {
  try {
    await Product.updateProduct(req.params.id, req.body);
    res.json({ message: 'Producto actualizado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.deleteProduct(req.params.id);
    res.json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};