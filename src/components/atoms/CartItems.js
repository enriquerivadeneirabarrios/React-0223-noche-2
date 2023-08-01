const CartItems = ({data, deleteFromCart}) => {
    let {title, precio, id, quantity} = data;

    return (
        <div className="cart-item">
            <h4>{title}</h4>
            <h5>{precio} x {quantity} = ${precio*quantity}</h5>
            <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
            <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
        </div>
    );

};

export default CartItems;