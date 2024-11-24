import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

const Cart: React.FC = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const total = cart.reduce((acc: number, item: { price: number }) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item: { id: number, name: string, price: number }) => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
