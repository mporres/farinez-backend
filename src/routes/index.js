const express = require('express');
const router = express.Router();

const db = require('../db/connection');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const recipeRoutes = require('./recipeRoutes');
const paqueteRoutes = require('./paqueteRoutes');

// Ruta de test
router.get('/ping', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT NOW() AS time');
    res.json({ status: '🟢 API is alive', time: rows[0].time });
  } catch (error) {
    res.status(500).json({ error: 'DB error' });
  }
});

// Rutas ABM de usuarios
router.use('/usuarios', userRoutes);
// Rutas ABM de productos
router.use('/productos', productRoutes);
// Rutas ABM de recetas
router.use('/recetas', recipeRoutes);
// Rutas ABM de paquetes
router.use('/paquetes', paqueteRoutes);

module.exports = router;
