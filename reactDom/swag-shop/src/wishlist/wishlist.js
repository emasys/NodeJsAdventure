import React, { Component } from 'react';
import './wishlist.css';
import DataService from '../services/data-service';
import notificationService from '../services/notification-service';
import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component{

  constructor(props){
    super(props);

    this.state = {wishlist:[
      {
        title:"anything",
        price:23.99,
        _id:"dfafecad"
      },
      {
        title:"anything again",
        price:23.99,
        _id:"dfafecade"
      },
      {
        title:"anything else",
        price:23.99,
        _id:"dfafecasd"
      }
    ]}

    this.createWishList = this.createWishList.bind(this);
  };

  createWishList = () => {
    const list = this.state.wishlist.map((product)=>
      <ProductCondensed product={product} key={product._id}/>
  );
    return(list);
  }
    render(){
        return(
            <div className="card">
               <div className="card-block">
                  <h4 className="card-title">Wish list</h4>
                  <ul className="list-group">
                    {this.createWishList()}
                  </ul>
               </div>
            </div>
        )

    }
}

export default WishList;
