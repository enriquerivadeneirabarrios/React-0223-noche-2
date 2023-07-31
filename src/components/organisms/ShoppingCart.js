import React, { useEffect, useReducer } from 'react'
import { TYPES } from '../../actions/shoppingActions'
import Product from '../atoms/Product'
import CartItems from '../atoms/CartItems'
import {shoppingReducer} from '../../reducer/shoppingReducer'
import {shoppingInitialState} from '../../reducer/shoppingReducer'
import axios from 'axios'


const ShoppingCart = () => {
    const [state,dispatch] = useReducer (shoppingReducer, shoppingInitialState);

    const addToCart = (id) => {
      console.log(id);
      dispatch({type: TYPES.ADD_TO_CART, payload: id});
  };

  const deleteFromCart = (id, all = false) => {
    if(all){
        dispatch({type : TYPES.REMOVE_ALL_PRODUCTS, payload:id})
    } else {
        dispatch({type : TYPES.REMOVE_ONE_PRODUCT, payload:id})
    }
    
};


const clearCart = () => {
  dispatch({type: TYPES.CLEAR_CART});
};

    const {products, cart} = state;

const updateState = async() => {
    const productsURL = "http://localhost:3004/products";
    const cartURL = "http://locahost:3004/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const newProduct = await resProducts.data;
    const newCartItem = await resCart.data;

    dispatch ({type: TYPES.READ_STATE , payload: [newProduct , newCartItem]})
}

useEffect ( () =>{
    updateState()
}, [])

    return (
    <>
      <h2>Carrito De Compras</h2>
        <h3>Productos</h3>
        <div className = "grid">
          {products.map((product) =>(
            <Product key={product.id} data={product} addToCart={addToCart}/>
          ))}         
        </div>

      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, i) =>(
          <CartItems key={i} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button onClick = {clearCart}>Limpiar carrito</button>
    </>
  );
};

export default ShoppingCart;