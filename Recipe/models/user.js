const mongoose = require('mongoose');


const User = mongoose.models(
  'User', new Schema ({
  name: {
    type: String,
    required: 'true'
  }
  email: {
    type: String,
    required: 'true'
  }
  password: {
    type: String,
    required: 'true'
  }
  bio: {
    type: String,
    default: 'This is information about the user
  },
  favourite: {
    type: [String]
  }

  })
);

module.exports = user;
