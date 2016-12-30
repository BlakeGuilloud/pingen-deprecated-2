import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  pin: Number,
});

module.exports = mongoose.model('User', UserSchema);
