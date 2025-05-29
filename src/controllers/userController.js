const User = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error('❌ Error en createUser:', err); // LOG real
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

const updateUser = async (req, res) => {
  try {
    await User.updateUser(req.params.id, req.body);
    res.json({ message: 'Usuario actualizado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteUser(req.params.id);
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};