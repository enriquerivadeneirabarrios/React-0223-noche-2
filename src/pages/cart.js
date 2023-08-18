import React, { useEffect, useReducer } from 'react'
import { TYPES } from '../actions/ShoppingActions'
import CartItems from '../components/molecules/CartItems'
import {shoppingReducer} from '../reducer/ShoppingReducer'
import {shoppingInitialState} from '../reducer/shoppingReducer'
import Button from '../components/atoms/Button'

import styled from 'styled-components'



const ShoppingCart = () => {
    const [state,dispatch] = useReducer (shoppingReducer, shoppingInitialState);


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

    const {cart,cartPrice} = state;
  


    return (
    <>
      <h2>Carrito De Compras</h2>
        <Carrito>
          <div>
            {cart.map((item, i) =>(
              <CartItems key={i} data={item} deleteFromCart={deleteFromCart} />
            ))}
            <Button Content = "Limpiar carrito" OnClick = {clearCart} />
          </div>

          <div>
            <h3>Subtotal</h3>
            <p>$ {cartPrice} </p>
            <Button Content = "Ir a pagar" />
            </div>
        </Carrito>
     
    </>
  );
};

export default ShoppingCart;



const Product = styled.div`

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

const Carrito = styled.div`
display:grid;
grid-template-columns: repeat(
  auto-fit,
  minmax(150px,1fr)
)
padding:50px;


`