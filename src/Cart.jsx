import React from "react";
import CartItems from "./CartItems";

export default function Cart({ cartItems }) {
  function total() {
    const priceArray = cartItems.map((item) => item.price);
    return priceArray.reduce((a, b) => a + b, 0);
  }
  return (
    <div className="w-1/2 mx-auto grid grid-cols-4 gap-5 mt-10">
      <h1>total: {total()}</h1>
      {cartItems.map((item, index) => (
        <CartItems
          name={item.name}
          price={item.price}
          key={index}
          id={item.id}
        />
      ))}
    </div>
  );
}
