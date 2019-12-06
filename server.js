const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ContactRoute = require('./Routes/contacts');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(ContactRoute);

mongoose
  .connect('mongodb://localhost:27017/Contactlist', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MOngoDB connected ...'))
  .catch(console.error);

app.listen(5000, () => {
  console.log('server runnig on port 5000');
});
