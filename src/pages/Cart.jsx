// src/pages/Cart.jsx
import React from 'react';

function Cart({ cart }) {
  const subtotal = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="py-2 border-b">
                {item.title} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Subtotal: ${subtotal}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;