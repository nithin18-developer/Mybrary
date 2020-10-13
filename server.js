if(process.env.NODE_ENV !== 'production'){
   require('dotenv').config();
}

const express = require('express');
const app = express();
const router = require('./routes/index');
const portNumber = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => console.log('conect to db'));


app.use('/', router)

app.listen(portNumber);