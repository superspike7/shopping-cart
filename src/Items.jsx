import React from "react";
import { items } from "./data";
import ItemCard from "./ItemCard";

export default function Items() {

  return (
    <div className="w-1/2 mx-auto grid grid-cols-4 gap-5 mt-10">
      {items.map((item) => (
        <ItemCard
          name={item.name}
          price={item.price}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
}
