const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');
const path = require('path');

const fileupload = require('express-fileupload');

const app = express(); 

app.use(express.json());
app.use(cors());
app.use(fileupload());
app.use(express.static(path.join(__dirname, '../', 'resources/')));
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname, '../', 'client', 'build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', '../', 'client', 'build', 'index.html'));
  });
}

module.exports = app;