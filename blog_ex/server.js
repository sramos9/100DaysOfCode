const express = require('express');
const app = express();
const authorsController = require('./controllers/author.js');
app.use('/authors', authorsController);

app.get('/', (req, res) => {
  res.render('index.ejs');
});



app.listen(3000, ()=>{
  console.log('litening on port 3000...');
});
