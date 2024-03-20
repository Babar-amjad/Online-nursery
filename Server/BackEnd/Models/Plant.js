// models/Plant.js

const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    category: String,
    name: String,
    des: String,
    price: String,
    image: String
});

module.exports = mongoose.model('Plant', plantSchema);