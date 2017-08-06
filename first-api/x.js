var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("ok this stuff is working");
});

app.listen(3000, function(){
	console.log("working well");
});

