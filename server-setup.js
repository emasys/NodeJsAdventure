const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/swag-shop');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(3000, function(){
    console.log("swag shop Api now running!");
});