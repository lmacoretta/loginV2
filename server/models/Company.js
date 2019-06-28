import mongoose from 'mongoose';
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('company', companySchema);