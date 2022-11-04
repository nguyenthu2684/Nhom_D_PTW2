const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
  
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send("Hello!");
})

const userRoutes =require('./routes/user.route');

app.use('/api/user', userRoutes);

app.listen(port, function() {
  console.log('Server listening on port ', port);
});
