const CartItems = ({data, deleteFromCart}) => {
    let {title, precio, id, quantity,subtotal} = data;
    

    return (
        <div>
            <h4>{title}</h4>
            <h5>{precio} x {quantity} = $ {subtotal} </h5>
            <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
            <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
        </div>
    );

};

export default CartItems;