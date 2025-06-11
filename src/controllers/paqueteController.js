const Paquete = require('../models/paqueteModel');

const getPaquetes = async (req, res) => {
  try {
    const paquetes = await Paquete.getAllPaquetes();
    res.json(paquetes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener paquetes' });
  }
};

const getPaquete = async (req, res) => {
  try {
    const paquete = await Paquete.getPaqueteById(req.params.id);
    if (!paquete) return res.status(404).json({ error: 'Paquete no encontrado' });
    res.json(paquete);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el paquete' });
  }
};

const createPaquete = async (req, res) => {
  try {
    const paquete = await Paquete.createPaquete(req.body);
    res.status(201).json(paquete);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear paquete' });
  }
};

const updatePaquete = async (req, res) => {
  try {
    await Paquete.updatePaquete(req.params.id, req.body);
    res.json({ message: 'Paquete actualizado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar paquete' });
  }
};

const deletePaquete = async (req, res) => {
  try {
    await Paquete.deletePaquete(req.params.id);
    res.json({ message: 'Paquete eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar paquete' });
  }
};

module.exports = {
  getPaquetes,
  getPaquete,
  createPaquete,
  updatePaquete,
  deletePaquete
};
