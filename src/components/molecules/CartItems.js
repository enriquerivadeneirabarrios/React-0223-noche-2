import styled from 'styled-components'
import React from 'react'


const CartItems = ({data, deleteFromCart}) => {
    let {title, img, precio, id, quantity,subtotal} = data;
    

    return (
        <Cards>
            <Name>{title}</Name>
            <Image src= {img} alt=""/>
            <Price>{precio} x {quantity} = $ {subtotal} </Price>
            <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
            <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
        </Cards>
    );

};

export default CartItems;

const Cards = styled.figure`
display:grid;
grid-template-columns(3,minmax(150px,auto));
grid-rows:1;
width: 200px;
height: 100px;
border-radius: 5px;
background-color: white;
border: 1px solid transparent;

`

const Image = styled.img`
width: 100%;
height: 80%;
object-fit:cover;
grid-column:1;

`

const Name = styled.h4`
grid-column: 2/3;
`

const Price = styled.p`
grid-column:2/3;
line-height:50%
`