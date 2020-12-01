const express = require('express');
const routes = require('./routes/index');

const app = express(); 

app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../', '../', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', '../', 'client', 'build', 'index.html'));
  });
}

module.exports = app;