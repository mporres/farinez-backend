const db = require('../db/connection');

const getAllPaquetes = async () => {
  const [rows] = await db.query('SELECT * FROM paquetes');
  return rows;
};

const getPaqueteById = async (id) => {
  const [paquetes] = await db.query('SELECT * FROM paquetes WHERE id = ?', [id]);
  if (!paquetes.length) return null;
  const paquete = paquetes[0];
  const [items] = await db.query('SELECT * FROM items_paquete WHERE paquete_id = ?', [id]);
  return { ...paquete, items };
};

const createPaquete = async (paqueteData) => {
  const { numero_orden, usuario_id, total, estado, direccion_envio, fecha_creacion, items } = paqueteData;
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();
    const [result] = await conn.query(
      'INSERT INTO paquetes (numero_orden, usuario_id, total, estado, direccion_envio, fecha_creacion) VALUES (?, ?, ?, ?, ?, ?)',
      [numero_orden, usuario_id, total, estado, direccion_envio, fecha_creacion]
    );
    const paqueteId = result.insertId;
    if (items && items.length) {
      await Promise.all(
        items.map(async (item) => {
          // Validar que el producto exista
          const [prod] = await conn.query('SELECT id FROM productos WHERE id = ?', [item.producto_id]);
          if (!prod.length) {
            throw new Error(`Producto con id ${item.producto_id} no existe`);
          }
          await conn.query(
            'INSERT INTO items_paquete (paquete_id, producto_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
            [paqueteId, item.producto_id, item.cantidad, item.precio_unitario]
          );
        })
      );
    }
    await conn.commit();
    return { id: paqueteId, ...paqueteData };
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
};

const updatePaquete = async (id, paqueteData) => {
  const { numero_orden, usuario_id, total, estado, direccion_envio, fecha_creacion, items } = paqueteData;
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();
    // Verificar que el paquete exista
    const [existing] = await conn.query('SELECT id FROM paquetes WHERE id = ?', [id]);
    if (!existing.length) {
      throw new Error(`Paquete con id ${id} no existe`);
    }
    await conn.query(
      'UPDATE paquetes SET numero_orden = ?, usuario_id = ?, total = ?, estado = ?, direccion_envio = ?, fecha_creacion = ? WHERE id = ?',
      [numero_orden, usuario_id, total, estado, direccion_envio, fecha_creacion, id]
    );
    await conn.query('DELETE FROM items_paquete WHERE paquete_id = ?', [id]);
    if (items && items.length) {
      await Promise.all(
        items.map(async (item) => {
          // Validar que el producto exista
          const [prod] = await conn.query('SELECT id FROM productos WHERE id = ?', [item.producto_id]);
          if (!prod.length) {
            throw new Error(`Producto con id ${item.producto_id} no existe`);
          }
          await conn.query(
            'INSERT INTO items_paquete (paquete_id, producto_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
            [id, item.producto_id, item.cantidad, item.precio_unitario]
          );
        })
      );
    }
    await conn.commit();
    return;
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
};

const deletePaquete = async (id) => {
  await db.query('DELETE FROM paquetes WHERE id = ?', [id]);
};

module.exports = {
  getAllPaquetes,
  getPaqueteById,
  createPaquete,
  updatePaquete,
  deletePaquete
};
