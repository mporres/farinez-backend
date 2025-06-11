const db = require('../db/connection');

// Obtener todas las recetas (datos base)
const getAllRecipes = async () => {
	const [rows] = await db.query('SELECT * FROM recetas');
	return rows;
};

const getRecipeById = async (id) => {
	// Obtener datos base de la receta
	const [recipes] = await db.query('SELECT * FROM recetas WHERE id = ?', [id]);
	if (!recipes.length) return null;
	const recipe = recipes[0];

	// Obtener ingredientes e instrucciones
	const [ingredientes] = await db.query('SELECT * FROM ingredientes_receta WHERE receta_id = ?', [id]);
	const [instrucciones] = await db.query('SELECT * FROM instrucciones_receta WHERE receta_id = ? ORDER BY paso_numero ASC', [id]);
	return { ...recipe, ingredientes, instrucciones };
};

const createRecipe = async (recipeData) => {
	const { name, difficulty, time, servings, category, price, image_url, description, ingredientes, instrucciones } = recipeData;
	const conn = await db.getConnection();
	try {
		await conn.beginTransaction();
		// Insertar receta
		const [result] = await conn.query(
			'INSERT INTO recetas (name, difficulty, time, servings, category, price, image_url, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
			[name, difficulty, time, servings, category, price, image_url, description]
		);
		const recetaId = result.insertId;
		// Insertar ingredientes
		if (ingredientes && ingredientes.length) {
			await Promise.all(
				ingredientes.map(ing => 
					conn.query(
						'INSERT INTO ingredientes_receta (receta_id, producto_id, cantidad_en_receta, conversion_note) VALUES (?, ?, ?, ?)', 
						[recetaId, ing.producto_id, ing.cantidad_en_receta, ing.conversion_note || '']
					)
				)
			);
		}
		// Insertar instrucciones
		if (instrucciones && instrucciones.length) {
			await Promise.all(
				instrucciones.map(inst => 
					conn.query(
						'INSERT INTO instrucciones_receta (receta_id, paso_numero, descripcion) VALUES (?, ?, ?)', 
						[recetaId, inst.paso_numero, inst.descripcion]
					)
				)
			);
		}
		await conn.commit();
		return { id: recetaId, ...recipeData };
	} catch (error) {
		await conn.rollback();
		throw error;
	} finally {
		conn.release();
	}
};

const updateRecipe = async (id, recipeData) => {
	const { name, difficulty, time, servings, category, price, image_url, description, ingredientes, instrucciones } = recipeData;
	const conn = await db.getConnection();
	try {
		await conn.beginTransaction();
		// Actualizar datos base de la receta
		await conn.query(
			'UPDATE recetas SET name = ?, difficulty = ?, time = ?, servings = ?, category = ?, price = ?, image_url = ?, description = ? WHERE id = ?', 
			[name, difficulty, time, servings, category, price, image_url, description, id]
		);
		// Eliminar ingredientes e instrucciones viejos
		await conn.query('DELETE FROM ingredientes_receta WHERE receta_id = ?', [id]);
		await conn.query('DELETE FROM instrucciones_receta WHERE receta_id = ?', [id]);
		// Insertar nuevos ingredientes
		if (ingredientes && ingredientes.length) {
			await Promise.all(
				ingredientes.map(ing => 
					conn.query(
						'INSERT INTO ingredientes_receta (receta_id, producto_id, cantidad_en_receta, conversion_note) VALUES (?, ?, ?, ?)', 
						[id, ing.producto_id, ing.cantidad_en_receta, ing.conversion_note || '']
					)
				)
			);
		}
		// Insertar nuevas instrucciones
		if (instrucciones && instrucciones.length) {
			await Promise.all(
				instrucciones.map(inst => 
					conn.query(
						'INSERT INTO instrucciones_receta (receta_id, paso_numero, descripcion) VALUES (?, ?, ?)', 
						[id, inst.paso_numero, inst.descripcion]
					)
				)
			);
		}
		await conn.commit();
	} catch (error) {
		await conn.rollback();
		throw error;
	} finally {
		conn.release();
	}
};

const deleteRecipe = async (id) => {
	// Al eliminar la receta, se eliminan cascada ingredientes e instrucciones
	await db.query('DELETE FROM recetas WHERE id = ?', [id]);
};

module.exports = {
	getAllRecipes,
	getRecipeById,
	createRecipe,
	updateRecipe,
	deleteRecipe
};