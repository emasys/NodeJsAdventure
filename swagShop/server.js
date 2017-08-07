let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost/swag-shop');

let Product = require('./model/product');
let WishList = require('./model/wishlist');

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
            res.send(savedProduct + "\n\nwas successfully added to the list");
        }
    });
})

app.post('/wishlist', function(req, res){
    let wishlist = new WishList();
    wishlist.title = req.body.title;
    wishlist.save(function(err, newWishList){
        if(err){
            res.status(500).send({error: "failed to create your wishlist"});
        }else{
            res.send(newWishList);
        }
        
    });
});

app.get('/wishlist', function(req, res){
    WishList.find({}).populate({path: 'products', model:'Product'}).exec(function(err, wishLists){
        if(err){
            res.status(500).send({error: "There's been an error somewhere"});
        } else{
            res.send(wishLists);
        }
    });
});

app.put('/wishlist/product/add', function(req, res){
    Product.findOne({_id:req.body.productId}, function(err, product){
        if(err){
            res.status(500).send({error: "could not add to list"})
        } else{
            WishList.update({_id:req.body.wishlistId}, {$addToSet:{ products: product._id}},
            function(err, wishlist){
                if(err){
                    res.status(500).send({error: "we hit a little snag"});
                }else{
                    res.send("your items have been successfully added");
                }
            });
        }
    });
});

app.get('/product', function(req, res){
    Product.find({}, function(err, products){
        if(err){
            res.status(500).send({error: "could not fetch products"})
        }else{
            res.send(products);
        }
    });
})

app.listen(3004, function(){
    console.log("swag shop Api now running!");
});