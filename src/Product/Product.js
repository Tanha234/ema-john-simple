import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'

import'./Product.css'
import Rating from 'react-rating';

const Product = (props) => {
   
    const{name,img,seller,stock,price,star}=props.product;
    return (
        <div className="product">
            <div>
            <img src={img}alt=" "/>
            </div>
            <div className="product-names">
            <h4 className="product-name">Name:{name.slice(0,70)}</h4>
            
            <p><small>By:{seller}</small></p>
           
            <p>Price:{price}</p>
            <p><small>only {stock} left in stock-order soon</small></p>
           <Rating 
            initialRating={star}
           emptySymbol="far fa-star icon-color"
           fullSymbol="fas fa-star icon-color"
          />
           <br/>
            <button onClick={()=>props.handleAddToCart(props.product)}

            className="btn-regular"><FontAwesomeIcon icon={faCoffee} />
            Add to cart</button>
            </div>
        </div>
    );
};

export default Product;