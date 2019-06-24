import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20
  },

  name: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  cart: {
    type: Array,
    default: []
  },

  history: {
    type: Array,
    default: []
  },

  role: {
    type: String,
    default: 'basic'
  }
});

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;

    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = mongoose.model('user', userSchema);
