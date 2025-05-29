const db = require('../db/connection');

const getAllUsers = async () => {
  const [rows] = await db.query('SELECT id, nombre, email, tipo FROM usuarios');
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.query('SELECT id, nombre, email, tipo FROM usuarios WHERE id = ?', [id]);
  return rows[0];
};

const createUser = async (user) => {
  const { nombre, email, password, tipo } = user;
  const [result] = await db.query(
    'INSERT INTO usuarios (nombre, email, password, tipo) VALUES (?, ?, ?, ?)',
    [nombre, email, password, tipo]
  );
  return { id: result.insertId, ...user };
};

const updateUser = async (id, user) => {
  const { nombre, email, tipo } = user;
  await db.query(
    'UPDATE usuarios SET nombre = ?, email = ?, tipo = ? WHERE id = ?',
    [nombre, email, tipo, id]
  );
};

const deleteUser = async (id) => {
  await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};