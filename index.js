const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
var cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var allowedOrigins = ['http://localhost:3000',
                      'https://effrenanthony.vercel.app'];
// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(require('./app/routes/contact.js'))

const port = process.env.PORT || 3001;



app.listen(port, () => {
  console.log('Server is up!');
});