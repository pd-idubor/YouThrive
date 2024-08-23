const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send(`You have successfully connected to the server.\nThis connection is via port ${PORT}.`);
});

app.get('/list', (req, res) => {
   res.send(['one', 'two', 'three', 'four', 'five']);
});

app.get('/object', (req, res) => {
  res.send({'firstname': 'Joe', 'lastname': 'Bush', 'age': 58, 'job': 'doctor'});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

