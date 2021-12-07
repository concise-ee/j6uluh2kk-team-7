const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/out')));

app.get('/api/christmas', (req, res) => {
  console.log('merry called!')
  var isItChristmasYet = false;
  var today = new Date();
  if (today.getDay() >= 24 && today.getDay() <= 26 && today.getMonth() == 12) {
      isItChristmasYet = true;
  }
  res.json({
    isItChristmasYet: isItChristmasYet
  });
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/out/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});