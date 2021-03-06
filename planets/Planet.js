const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Planet = new mongoose.Schema({
  edited: { type: Date, default: Date.now },
  climate: String,
  surface_water: String,
  name: { type: String, required: true, index: true },
  diameter: String,
  rotation_period: String,
  created: { type: Date, default: Date.now },
  terrain: String,
  gravity: String,
  orbital_period: String,
  key: { type: Number, unique: true },
  specie: { type: String, ref: 'Specie'},
  characters: { type: String, ref: 'Character'}
});

module.exports = mongoose.model('Planet', Planet);
