'use strict';

var express     = require('express');
var helmet      = require('helmet');
var bodyParser  = require('body-parser');

var apiRoutes         = require('./routes/api.js');

var app = express();

app.use(helmet());

app.use('/public', express.static(process.cwd() + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

//Routing for API 
apiRoutes(app);  
    
//404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT);
});

module.exports = app; //for testing
