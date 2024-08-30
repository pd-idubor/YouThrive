const router = require('./routes');
const dbClient = require('./db');
const express = require('express');


const app = express();
const port = 5000;
//process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', router);

dbClient;


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

