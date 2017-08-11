import React, { Component } from 'react';
import './product.css';

class Product extends Component{
    render(){
        return(
            <div className="card">
                <img className="card-img-top setImage" src={this.props.imgUrl} alt="product image"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">Price: ${this.props.price}</p>
                    <a href="#" className="btn btn-primary">Add to wishlist</a>
                </div>
            </div>
        )
        
    }
}

export default Product;