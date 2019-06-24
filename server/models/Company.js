import mongoose from 'mongoose';
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  products: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('company', companySchema);