import React, { useEffect, useReducer, useId, useState } from 'react'

import { TYPES } from '../../actions/ShoppingActions.js'
import CartItems from '../molecules/CartItems'
import {shoppingReducer} from '../../reducer/shoppingReducer'
import {shoppingInitialState} from '../../reducer/shoppingReducer'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import styled from 'styled-components'
import { Modal ,ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ButtonRed from '../atoms/ButtonRed.js'



function CartIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 17h-11v-14h-2' />
      <path d='M6 5l14 1l-1 7h-13' />
    </svg>
  )
}


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

    const [mostrarCarrito, setMostrarCarrito,] = useState(false);
    const [modal, setModal] = useState(false);

      const handleCheckboxChange = () => {
        setMostrarCarrito(!mostrarCarrito);
      };

      //const toggle = () => setModal(!modal);
      const handleConfirmarPago = () => {
      const confirmacion = window.confirm('¿Estás seguro de confirmar el pago?');
      if (confirmacion) {
        // Aquí puedes realizar la acción de confirmación de pago
        // Por ejemplo, enviar una solicitud al servidor, actualizar el estado, etc.
      }
    };


    return (
    <>

      <label className='cart-button'>
        <CartIcon />
        <input type="checkbox" onChange={handleCheckboxChange} hidden/>
        Mostrar carrito
      </label>


         <aside className="cart"  style={{ display: mostrarCarrito ? 'block' : 'none' }}>
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
            <Button OnClick={handleConfirmarPago} Content = "Ir a pagar" />
            {/*<Button OnClick={toggle}  Content = "Ir a pagar" />

            <Modal isOpen={modal} toggle={toggle} fullscreen='md' size='=' centered={true} scrollable={true} >
                <ModalHeader toggle={toggle}>Confirmación de pago</ModalHeader>
                <ModalBody>
                 ¿Está seguro de realizar la compra?
                </ModalBody>
                <ModalFooter>
                  <Button  OnClick={toggle} Content='Do Something' /> {' '}
                    
                  <ButtonRed OnClick={toggle} Content='Cancel' />

                </ModalFooter>
            </Modal>*/}
          </Sub>
        </aside>

     
        <h3>Productos</h3>
      <Product>
        {products.map((product) =>(
          <Card data={product} addToCart={addToCart} />
        ))}         
      </Product>

      <style jsx>{`
      .cart {
        display:grid;
        position: absolute;
        right:0px;
        top: 0px;


        padding-left: 5vw;
        padding-top: 10px;
        padding-bottom: 50px;
        background-color: white;


        grid-template-columns: repeat(auto-fit,minmax(150px,1vh));
        grid-template-rows:repeat(auto-fit,minmax(10vh,auto));
        grid gap: 2px;
        height: 100vh;
        width: 30vw;

        @media (max-width:768px){
          grid-template-columns:minmax(150px,1vh);
          height:200vh;

      }

      .cart-button {
        align-items: center;
        background: #09f;
        border-radius: 9999px;
        cursor: pointer;
        display: flex;
        height: 32px;
        justify-content: center;
        padding: 4px;
        position: absolute;
        right: 8px;
        top: 8px;
        transition: all .3s ease;
        width: 32px;
        z-index: 9999;
      }
      
      .cart-button:hover {
        scale: 1.1;
      }
      
     
      `}

      </style>
      
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