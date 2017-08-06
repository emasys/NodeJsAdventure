var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 
var myGuys = [
    {
        "Name":"Michael",
        "Nickname": "mic"
    },
    {
        "Name":"Mikel",
        "Nickname": "mich"
    },
    {
        "Name":"Mikelson",
        "Nickname": "mike"
    },
    {
        "Name":"Mikell",
        "Nickname": "obi"
    }

],

ingredients = [
    {
        "id":"232kAk",
        "text":"Eggs"
    },
    {
        "id":"dkP345",
        "text":"Milk"
    },
    {
        "id":"dkcuu7",
        "text":"Bread"
    },
    {
        "id":"73hdy",
        "text":"pan cakes"
    }
];
app.get('/guys', function(req, res){
	res.send(myGuys);
});

app.post('/guys', function(req, res){
    var guy = req.body;
    if(!guy || guy.Name === ""){
        res.status(500).send({error:"something went wrong"});
    }else{
        myGuys.push(guy);
        res.status(200).send(myGuys);
    }
});

app.put('/guys/:Name',function(req, res){
    var newNickname = req.body.Nickname;
    if(!newNickname || newNickname ===""){
        res.status(500).send({error: "something did not go well"});
    }else{
        
        for(i = 0; i < myGuys.length; i++){
            var x = myGuys[i];
            if(x.Name === req.params.Name){
                myGuys[i].Nickname = newNickname;
                break;
            }
        }
    res.send(myGuys);
    }
});



app.get('/ingredients', function(request, response) {
    response.send(ingredients);
});

app.post('/ingredients', function(request, response) {
    var ingredient = request.body;
    if (!ingredient || ingredient.text === "") {
        response.status(500).send({error: "Your ingredient must have text"});
    } else {
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
});

app.put('/ingredients/:ingredientId', function(request, response) {
    
    var newText = request.body.text;
    
    if (!newText || newText === "") {
        response.status(500).send({error:"You must provide ingredient text"})
    } else {
        var objectFound = false;
        for (var x = 0; x < ingredients.length; x++) {
            var ing = ingredients[x];
            
            if (ing.id === request.params.ingredientId) {
                ingredients[x].text = newText;
                objectFound = true;
                break;
            }
        }
        
        if (!objectFound) {
            response.status(500).send({error:"Ingredient id not found"});
        } else {
            response.send(ingredients);
        }
    }   
});

app.listen(3000, function(){
	console.log("First API running on port 3000!");
});

