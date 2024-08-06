const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/practice', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
