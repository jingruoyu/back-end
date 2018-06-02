'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var morgan = require('morgan');
var app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.use(morgan('short', {stream: accessLogStream}));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + "/dist"));

app.all('*', function(req, res, next){
    var reg = /.*jingruoyu.com$|127.0.0.1/;
    if(!reg.test(req.hostname)){
        res.send('error hostname');
        res.end();
    }
    next();
})

app.get('/', function(req, res){
    console.log(req.hostname);
    console.log(__dirname)
    res.sendFile("/dist/index.html");
    res.end();
})

app.listen(10000, function(){
    console.log("Express server listening 10000")
})
