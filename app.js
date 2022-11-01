
var path = require('path');
var express = require('express');
var methodOverride = require('method-override')
var exphbs  = require('express-handlebars');
var app = express();
var route = require('./src/routers')
var db = require('./src/config/db')
var bp = require('body-parser')

 

 db.connect();

app.use(express.static(path.join(__dirname +'/src/public/img')));

app.use("/img",express.static(path.join(__dirname +'//src/public/img')));
app.use("/css",express.static(path.join(__dirname +'//src/public/css')));

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(methodOverride('_method'))





 
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src/res/views'));

 
route(app);

 
app.get('/', function (req, res) {
    res.render('home');
});
 

app.listen(3000);