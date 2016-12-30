import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  externalId: String,
  pin: Number,
});

module.exports = mongoose.model('User', UserSchema);
