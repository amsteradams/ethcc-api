const express = require('express');
const bodyParser = require('body-parser');
const pay = require('./send.js');
const app = express();

app.use(bodyParser.json());

app.post('/send', (req, res) => {
  pay(req.body.amount);  
  res.send('Sending ' + req.body.amount + ' matics');
});

app.listen(3000, () => {
  console.log('Le serveur Express écoute sur le port 3000');
});