const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },

  document: {
    type: Number,
    required: true
  },

  birthdate: {
    type: Number,
    required: true
  },

  sex: {
    type: Boolean,
    required: true
  },

  address: {
    type: String
  },

  phone: {
    type: Number
  },

  postalCode: {
    type: Number
  },

  city: {
    type: String
  },

  province: {
    type: String
  }
});

module.exports = mongoose.model('profile', profileSchema);