// routes/exerciseRoutes.js
const express = require("express");
const router = express.Router();
const exerciseController = require("../Controllers/ExerciseController");

router.post("/product", exerciseController.createExercise);
router.get("/product/:id", exerciseController.getExerciseById);

router.get("/products", exerciseController.getAllExercise);
// Add other routes as needed

module.exports = router;
