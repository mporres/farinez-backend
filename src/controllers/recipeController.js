const Recipe = require('../models/recipeModel');

const getRecipes = async (req, res) => {
	try {
		const recipes = await Recipe.getAllRecipes();
		res.json(recipes);
	} catch (err) {
		res.status(500).json({ error: 'Error al obtener recetas' });
	}
};

const getRecipe = async (req, res) => {
	try {
		const recipe = await Recipe.getRecipeById(req.params.id);
		if (!recipe) return res.status(404).json({ error: 'Receta no encontrada' });
		res.json(recipe);
	} catch (err) {
		res.status(500).json({ error: 'Error al obtener la receta' });
	}
};

const createRecipe = async (req, res) => {
	try {
		const newRecipe = await Recipe.createRecipe(req.body);
		res.status(201).json(newRecipe);
	} catch (err) {
		res.status(500).json({ error: 'Error al crear receta' });
	}
};

const updateRecipe = async (req, res) => {
	try {
		await Recipe.updateRecipe(req.params.id, req.body);
		res.json({ message: 'Receta actualizada' });
	} catch (err) {
		res.status(500).json({ error: 'Error al actualizar receta' });
	}
};

const deleteRecipe = async (req, res) => {
	try {
		await Recipe.deleteRecipe(req.params.id);
		res.json({ message: 'Receta eliminada' });
	} catch (err) {
		res.status(500).json({ error: 'Error al eliminar receta' });
	}
};

module.exports = {
	getRecipes,
	getRecipe,
	createRecipe,
	updateRecipe,
	deleteRecipe
};