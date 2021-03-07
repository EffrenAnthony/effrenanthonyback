const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
var cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(require('./app/routes/contact.js'))

const port = process.env.PORT || 3001;



app.listen(port, () => {
  console.log('Server is up!');
});