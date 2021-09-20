import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";

export default function Cart({ cartItems }) {
  const [cart, setCart] = useState(cartItems);

  function total() {
    const priceArray = cartItems.map((item) => item.price);
    return priceArray.reduce((a, b) => a + b, 0);
  }

  const groupByQuantity = (arr) => {
    const res = {};
    [...arr].forEach((obj) => {
      const key = `${obj.name}${obj.id}${obj.price}`;
      if (!res[key]) {
        res[key] = { ...obj, quantity: 0, totalPrice: 0 };
      }
      res[key].quantity += 1;
      res[key].totalPrice += obj.price;
    });
    return Object.values(res);
  };

  useEffect(() => {
    setCart(groupByQuantity(cart));
  }, [cartItems]);

  return (
    <div className="w-1/2 mx-auto grid grid-cols-1 mt-10 gap-2">
      {cart.map((item, index) => (
        <CartItems
          name={item.name}
          totalPrice={item.totalPrice}
          quantity={item.quantity}
          key={index}
          id={item.id}
        />
      ))}
      <h1 className="text-center text-2xl font-bold">total: {total().toFixed(2)}</h1>
    </div>
  );
}
