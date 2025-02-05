// src/components/Card.jsx
import React from 'react';
import "../style.css";

function Card({ product, addToCart }) {
  return (
    <div className="p-4 border rounded-lg shadow bg-gray-800 text-white">
      <h2 className="text-lg font-bold">{product.title}</h2>
      <img src={product.image} alt={product.title} className="h-40 object-cover w-full my-2" />
      <p className="text-gray-400">{product.description.slice(0, 100)}...</p>
      <p className="font-bold">${product.price}</p>
      <button 
        className="mt-2 bg-pink-500 text-white py-1 px-4 rounded hover:bg-pink-600 transition"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;