const mongoose = require('mongoose');
// const validator = require('validator');
const Schema = mongoose.Schema;

const ContactShema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: Number,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = Contact = mongoose.model('contact', ContactShema);
