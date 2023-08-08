import React, { useEffect, useReducer } from 'react'
import { TYPES } from '../../actions/ShoppingActions.js'
import CartItems from '../molecules/CartItems'
import {shoppingReducer} from '../../reducer/ShoppingReducer'
import {shoppingInitialState} from '../../reducer/shoppingReducer'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import styled from 'styled-components'


function cartSum (total,num) {
  return total + cart[num].subtotal
}

function cartPrice () { 
  return cart.reduce(cartSum,0)}

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

    const {products, cart,subtotals} = state;

    


    return (
    <>

      <h3>Productos</h3>
      <Product>
        {products.map((product) =>(
          <Card data={product} addToCart={addToCart} />
        ))}         
      </Product>

<h2>Carrito De Compras</h2>
        <div>
        {cart.map((item, i) =>(
          <CartItems key={i} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <div>
      <Button Content = "Limpiar carrito" OnClick = {clearCart} />
      <Button Content = "Ir a pagar" />
      </div>
      <div>
        <h3>Subtotal</h3>
        <p>$ {subtotals} </p>
      </div>
      
    </>
  );
};

export default ShoppingCart;



const Product = styled.div`
display: flex;
justify-content:center;
justify-content:space-around;
padding-left: 50px;
padding-top: 50px;
padding-bottom: 50px;
background-color: white;
display: grid;
grid-template-columns: repeat(
  auto-fit,
  minmax(150px,1fr)
  
)


`