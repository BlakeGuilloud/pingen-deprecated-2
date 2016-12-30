import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ApiSchema = new Schema({
  apiKey: String,
});

module.exports = mongoose.model('Api', ApiSchema);
