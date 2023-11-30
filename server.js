const express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');


const properties = require('./config/properties');
const db = require('./config/database');

//hero routes
var herosRoutes = require('./apis/heros/heros.routes');
const app = express();

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//initialise express router
var router = express.Router();

db();

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

 // use express router
app.use('/api',router);



herosRoutes(router);

app.listen(properties.PORT,function(){
    console.log('Server is running on port '+ properties.PORT);
});
