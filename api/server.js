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
  res.json({
    isItChristmasYet: false
  });
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/out/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});