const mongoose = require('mongoose');


const Recipe = mongoose.models(
  'Recipe', new Schema ({
  title: {
    type: String,
    required: true
  }
  ingredients: {
    type: [String],
    required: true
  }
  instructions: {
    type: [String],
    required: true
  }
  author: {
    type: mongoose.ObjectId,
    required: true
  },
  categories: {
    type: [String]
  }

  })
);

module.exports = Recipe;
