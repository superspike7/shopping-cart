import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./data";

export default function Item({ handleAddToCart }) {
  const [item, setItem] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [amount, setAmount] = useState(1);

  let { itemId } = useParams();

  useEffect(() => {
    const findItem = items.find((item) => itemId == item.id);
    setItem(findItem);
  }, []);

  useEffect(()=>{
    setCartItems(new Array(amount).fill(item))
  },[amount, item])

  function handleChange(e) {
    setAmount(Number(e.target.value))
  }

  return (
    <div className="w-1/2 mt-10 mx-auto justify-center flex flex-col items-center">
      <div className="bg-blue-200 flex justify-center items-center w-64 h-64 ">
        image
      </div>
      <h1>{item.name}</h1>
      <h1>{item.price}</h1>
      <form onSubmit={(e) => handleAddToCart(e, cartItems)}>
        <input type="number" value={amount} onChange={handleChange} />
        <button>Add to Cart</button>
      </form>
    </div>
  );
}
