# 🍲 Recipe App - Backend (Node.js + MongoDB)

This is a simple backend application for managing recipes, built using **Node.js**, **Express.js**, and **MongoDB**. It supports basic CRUD operations and category-based filtering of recipes via RESTful API endpoints. This app was developed as part of an internship task.

---

## 📌 Features Implemented

✅ Create new recipes  
✅ View all recipes  
✅ Filter recipes by category  
✅ View a recipe by ID  
✅ Update existing recipes  
✅ Delete a recipe  

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (using Mongoose ODM)  
- **Testing**: Postman (for API testing)  
- **Environment**: dotenv for config

## API Endpoints
Base URL: http://localhost:3000/api/recipes

 POST /api/recipes — Create a Recipe
Request Body:

{
  "title": "Chocolate Cake",
  "ingredients": ["Flour", "Sugar", "Cocoa"],
  "instructions": "Mix ingredients and bake.",
  "category": "Dessert"
}

