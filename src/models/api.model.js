import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ApiSchema = new Schema({
  key: String,
});

module.exports = mongoose.model('Api', ApiSchema);
