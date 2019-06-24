import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: 'company'
  },

  name: {
    type: String,
    unique: true,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },

  price: {
    type: Number,
    required: true
  },

  waist: {
    type: String,
    required: true
  },

  color: {
    type: Array,
    default: []
  },

  stock: {
    type: Boolean,
    required: true
  },

  shipping: {
    required: true,
    type: Boolean
  },

  publish: {
    type: Boolean,
    required: true
  },

  images: {
    type: Array,
    default: []
  },

  sold: {
    type: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema);