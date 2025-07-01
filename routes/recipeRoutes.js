const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// POST - Create a new recipe
router.post("/", async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error creating recipe", error });
  }
});

// GET - All recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes", error });
  }
});

module.exports = router;
