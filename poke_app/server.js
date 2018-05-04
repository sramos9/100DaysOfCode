const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js')

app.get('/', (req, res) => {
  res.send('Welcom to the Pokemon App!');
});


app.listen(3000, ()=> {
  console.log('listening');
});
