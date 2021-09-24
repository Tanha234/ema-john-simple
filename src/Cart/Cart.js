import React from 'react';
import'./Cart.css'

const Cart = (props) => {
    const{cart}=props;
    // const total=cart.reduce((previous,product)=>previous+product.price,0)*product.quantity;
    let totalQuantity=0;
    let total=0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1
        }
        total=total+product.price*product.quantity;
        totalQuantity=totalQuantity+total;
    }
    const shipping=total>0? 15:0;
    const tax=(total+shipping)*0.10;
    const grandTotal=total+shipping+tax;
    return (
        <div>
            <h3 className="fix-align">Order summary</h3>
                <h3 className="fix-align">Items ordered:{props.cart.length}</h3>
               
                <p className="fix-align">Total:{total.toFixed(2)}</p>
                <p className="fix-align">Shipping:{shipping}</p>
                <p className="fix-align">Tax:{tax.toFixed(2)}</p>
                <h4 className="fix-align">GrandTotal:{grandTotal.toFixed(2)}</h4>


        </div>
    );
};

export default Cart;