'use strict';

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const { apiRouter } = require('./routes/api.js');

const app = express();

app.use(helmet());

app.use('/public', express.static(process.cwd() + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index page (static HTML)
app.route('/')
  .get((req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
  });

//Routing for API 
app.use('/api', apiRouter);
    
//404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + listener.address().port);
});

module.exports = app; //for testing
