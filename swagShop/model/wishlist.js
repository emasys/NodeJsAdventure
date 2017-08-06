let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

let wishList = new Schema({
    title: {type: String, default:"really cool list"},
    products: [{type: ObjectId, ref:'Product'}]
});

module.exports = mongoose.model('WishList', wishList);