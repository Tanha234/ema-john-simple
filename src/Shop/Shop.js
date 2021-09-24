import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shop.css'
import {addToDb, getStoredCart} from './../utilities/fakedb'

const Shop = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    const[displayProduct,setDisplayProduct]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(json=>{
            setProducts(json);
            setDisplayProduct(json);})
        
            

    },[])
    useEffect(()=>{
        const savedKey=getStoredCart();
        const storedCart=[];
        if(products.length){
        for(const key in savedKey){
            const addedProduct=products.find(product=>product.key===key);
            if(addedProduct){
                const quantity=savedKey[key];
                addedProduct.quantity=quantity;
                storedCart.push(addedProduct);


            }
            


        }
        setCart(storedCart);
    }

    },[products])
    const handleAddToCart=product=>{
       const newcart=[...cart,product];
       setCart(newcart);
       addToDb(product.key);
       

    }
    const handleEvent=event=>{
       const searchText=(event.target.value);
       const matchText=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
       console.log(matchText.length);
       setDisplayProduct(matchText);
    }
    return (
        <>
        <div className="search-container">
           <input onChange={handleEvent}
            type="text" placeholder="Search your product"/>
        </div>
        <div className="container">
            <div className="product-container">
                
                {
                  displayProduct.map(product=><Product
                    key={product.key}
                         product={product}
                         handleAddToCart={handleAddToCart}>

                         </Product>)
                        
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </>

    );
};

export default Shop;