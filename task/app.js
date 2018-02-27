var express = require('express');
var skillController = require('./controllers/skillController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files

app.use(express.static('./public'))


//fire controllers
skillController(app);

//listen to port
app.listen(3000);
console.log('listening to port 3000');
