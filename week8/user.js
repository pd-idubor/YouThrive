//User model
const mongoose = require('mongoose');


const User = mongoose.model(
  "Users",
  new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    age: {
      type: Number,
    },
  })
);

module.exports = User;
