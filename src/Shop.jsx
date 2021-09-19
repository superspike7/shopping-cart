import React, { useEffect, useState } from "react";
import Items from "./Items";

export default function Shop() {
  const [cart, setCart] = useState([]);

  return (
    <div className="">
      <nav className="text-center flex justify-center gap-5 mt-1 bg-blue-100">
        <h3>Items: 0</h3>
        <button className="bg-green-500 rounded-md text-white px-1">
          Checkout
        </button>
      </nav>
      <Items/>
    </div>
  );
}
