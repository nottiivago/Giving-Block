const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    default: '../assets/images/default-image.png',
  },
  address: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  zip: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  serviceType: { 
    type: String, 
    enum: ['help-wanted', 'offering-help'], 
    required: true 
  },
  username: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;