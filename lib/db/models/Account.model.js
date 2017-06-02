import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  account_token: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
    ref: 'User',
  },
  email: {
    type: String,
    ref: 'Email',
  },
  phone: {
    type: String,
    ref: 'Phone',
  },
  members: [{
    type: String,
    ref: 'User',
  }],
});

export default mongoose.model('Account', AccountSchema);
