import React from "react";
import { items } from "./data";
import ItemCard from "./ItemCard";

export default function Shop(){
  return(
    <div className="">
      <nav className="text-center flex justify-center gap-5 mt-1 bg-blue-100">
        <h3>Items: 0</h3>
        <button className="bg-green-500 rounded-md text-white px-1" >Checkout</button>
      </nav>
      <div className="w-1/2 mx-auto grid grid-cols-4 gap-5 mt-10">
        {items.map(item=>(
          <ItemCard name={item.name} price={item.price} key={item.id} />
        ))}
      </div>
    </div>
  )
}