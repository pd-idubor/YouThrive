const mongoose = require('mongoose');


const Rating = mongoose.models(
  'Rating', new Schema ({
  author: {
    type: mongoose.ObjectId,
    required: 'true'
  },
  recipe: {
    type: mongoose.ObjectId,
    required: 'true'
  }

  })
);

module.exports = Rating;
