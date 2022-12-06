const mongoose = require('mongoose');
const { Schema } = mongoose;

const basicSchema = new Schema(
  {
    propiedad1: String,
    propiedad2: Number
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const test = mongoose.model('Test', basicSchema);
module.exports = test;