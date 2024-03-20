// controllers/plantController.js

const Plant = require('../Models/Plant');


// Create a plant
exports.createPlant = async (req, res) => {
    try {
      const plant = new Plant(req.body);
      await plant.save();
      res.status(201).send(plant);
    } catch (error) {
      res.status(400).send(error);
    }
  };

// Controller to get all plants
exports.getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to get a single plant by ID
exports.getPlantById = async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (plant == null) {
            return res.status(404).json({ message: 'Plant not found' });
        }
        res.json(plant);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};