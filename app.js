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

app.all('*', function(){
    console.log('request');
})

app.get('/', function(req, res){
    console.log(1);
    console.log(req.hostname);
//    if(req.hostname !== 'www.jingruoyu.com'){
//        return;
//    }
    res.sendFile('~/front-end/vue/dist/index.html');
    res.sendStatus(200);
    res.end();
})

app.listen(10000, function(){
    console.log("Express server listening 10000")
})
