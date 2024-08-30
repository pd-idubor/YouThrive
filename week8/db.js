const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

class DBClient {
  constructor() {
    const url = `${process.env.MONGO_URL}`;
    mongoose.connect(url)
    .then(() => {
      console.log("Successfully connected to MongoDB.");
    })
    .catch(err => {
      console.error("Connection error", err);
      process.exit();
    });
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
