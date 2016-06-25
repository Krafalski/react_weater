'use strict'

const bodyParser      = require('body-parser');
const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const request         = require('request');

const app             = express();

if (!process.env.NODE_ENV){
  require('dotenv').config();
}

if (process.env.NODE_ENV === 'dev'){
  app.use(logger('dev'));
} else {
  app.use (logger('common'));
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
});

const port = process.env.PORT || 2345;
const time = new Date();
const server = app.listen(port,()=>console.log('server is up on port ', port, ' Date and time is ', time));
