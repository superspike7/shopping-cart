import React from "react";
import ItemCard from "./ItemCard";

export default function Cart({cartItems}){
  return(
    <div className="w-1/2 mx-auto grid grid-cols-4 gap-5 mt-10">
      {cartItems.map((item) => (
        <ItemCard
          name={item.name}
          price={item.price}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  )
}