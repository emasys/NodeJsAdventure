let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost/swag-shop');

let Product = require('./model/product');
let wishlist = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/product', function(req, res){
    let product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.save(function(err, savedProduct){
        if(err){
            res.status(500).send({error:"there seem to be a problem"});
        }else{
            res.send(savedProduct);
        }
    });
})

app.get('/product', function(req, res){
    product.find({}, function(err, products){
        if(err){
            res.status(500).send({error: "could not fetch products"})
        }else{
            res.send(products);
        }
    });
})

app.listen(3000, function(){
    console.log("swag shop Api now running!");
});