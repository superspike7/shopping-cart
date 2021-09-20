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

  useEffect(() => {
    setCartItems(new Array(amount).fill(item));
  }, [amount, item]);

  function handleChange(e) {
    setAmount(Number(e.target.value));
  }

  function getImageUrl(iconId) {
    return new URL(`./Icons/${iconId}.svg`, import.meta.url).href;
  }

  return (
    <div className="w-1/2 mt-10 mx-auto justify-center flex items-center">
      <div className="bg-blue-100 rounded-xl flex justify-center items-center w-64 h-64 p-5">
        <img src={getImageUrl(item.id)} alt="" />
      </div>
      <div className="flex flex-col justify-around text-center h-64">
        <h1 className="text-4xl font-bold">{item.name}</h1>
        <h1 className="text-2xl font-light">{item.price}</h1>
        <form
          onSubmit={(e) => handleAddToCart(e, cartItems)}
          className="flex flex-col items-center justify-center gap-3"
        >
          <input
            type="number"
            value={amount}
            onChange={handleChange}
            className="w-1/4 text-2xl bg-gray-100 p-1 rounded-md text-center "
            min="0"
          />
          <button className="text-xl bg-blue-500 rounded-md text-white font-bold px-2">
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
}
