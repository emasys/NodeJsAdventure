import React, { Component } from 'react';
import './product-condensed.css';

class ProductCondensed extends Component{
    render(){
        return(
            <li className="list-group-item pc">
              <a className="btn btn-outline-danger">x</a>
              <p>{this.props.product.title} | <b> ${this.props.product.price}</b></p>
            </li>
        )

    }
}

export default ProductCondensed;
