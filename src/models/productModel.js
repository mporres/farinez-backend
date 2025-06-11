const db = require('../db/connection');

const getAllProducts = async () => {
  const [rows] = await db.query('SELECT id, name, price, category, stock, description, image_url FROM productos');
  return rows;
};

const getProductById = async (id) => {
  const [rows] = await db.query('SELECT id, name, price, category, stock, description, image_url FROM productos WHERE id = ?', [id]);
  return rows[0];
};

const createProduct = async (product) => {
  const { name, price, category, stock, description, image_url } = product;
  const [result] = await db.query(
    'INSERT INTO productos (name, price, category, stock, description, image_url) VALUES (?, ?, ?, ?, ?, ?)',
    [name, price, category, stock, description, image_url]
  );
  return { id: result.insertId, ...product };
};

const updateProduct = async (id, product) => {
  const { name, price, category, stock, description, image_url } = product;
  await db.query(
    'UPDATE productos SET name = ?, price = ?, category = ?, stock = ?, description = ?, image_url = ? WHERE id = ?',
    [name, price, category, stock, description, image_url, id]
  );
};

const deleteProduct = async (id) => {
  await db.query('DELETE FROM productos WHERE id = ?', [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};