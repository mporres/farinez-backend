const db = require('../db/connection');

const validateCredentials = async (req, res) => {
	const { nombre_usuario, password } = req.body;
	try {
		const [rows] = await db.query(
			'SELECT tipo FROM usuarios WHERE nombre_usuario = ? AND password = ?',
			[nombre_usuario, password]
		);
		if (rows.length === 0) {
			return res.json({ valid: false });
		}
		res.json({ valid: true, tipo: rows[0].tipo });
	} catch (err) {
		res.status(500).json({ error: 'Error al validar las credenciales' });
	}
};

module.exports = {
	validateCredentials
};