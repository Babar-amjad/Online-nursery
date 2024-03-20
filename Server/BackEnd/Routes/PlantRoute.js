// routes/plantRouter.js

const express = require('express');
const router = express.Router();
const plantController = require('../Controllers/PlantController');


// Route to create plants
router.post('/createplant', plantController.createPlant);

// Route to get all plants
router.get('/plants', plantController.getAllPlants);

// Route to get a single plant by ID
router.get('/:id', plantController.getPlantById);

module.exports = router;