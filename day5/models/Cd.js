const mongoose = require('../database');

const cdSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Cd = mongoose.model('Cd', cdSchema);


module.exports = Cd;