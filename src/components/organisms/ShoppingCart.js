import React, { useEffect, useReducer } from 'react'
import { TYPES } from '../../actions/ShoppingActions.js'
import CartItems from '../molecules/CartItems'
import {shoppingReducer} from '../../reducer/ShoppingReducer'
import {shoppingInitialState} from '../../reducer/shoppingReducer'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import styled from 'styled-components'





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

    const {products, cart,cartPrice} = state;

    


    return (
    <>

         <Carrito>
        <Title>Carrito De Compras</Title>
          <CartCards>
            {cart.map((item, i) =>(
              <CartItems key={i} data={item} deleteFromCart={deleteFromCart} />
            ))}
          </CartCards>

          <CartCards>
          <Button Content = "Limpiar carrito" OnClick = {clearCart} />
          </CartCards>


          <Sub>
            <SubText><b>Subtotal</b><br />$ {cartPrice}</SubText>
            <Button OnClick  Content = "Ir a pagar" />
            </Sub>
        </Carrito>


       

        <h3>Productos</h3>
      <Product>
        {products.map((product) =>(
          <Card data={product} addToCart={addToCart} />
        ))}         
      </Product>
      
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
padding-left: 5vw;
padding-top: 10px;
padding-bottom: 50px;
background-color: white;

display:grid;
grid-template-columns: repeat(auto-fit,minmax(150px,1vh));
grid-template-rows:repeat(auto-fit,minmax(10vh,auto));
grid gap: 2px;
height: 120vh;
width: 30vw;

@media (max-width:768px){
  grid-template-columns:minmax(150px,1vh);
  height:200vh;
}

`

const CartCards = styled.figure`
grid-column:1/4;
width: 25vw;

border-radius: 5px;
background-color: white;
border: 1px solid transparent;


`

const Title = styled.h2`
grid-column:1/4;
grid-row:1;
`

const Sub = styled.div`
grid-template-columns: 100%;
grid-template-columns: repeat(3,1fr);

justify-self:start;

`
const SubText = styled.p`
margin-left:20px;
font-size: 1.5rem;
`