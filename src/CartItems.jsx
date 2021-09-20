import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function CartItems(props) {
  const { name, quantity, totalPrice, id} = props;
  let { url } = useRouteMatch();

  function getImageUrl(iconId) {
    return new URL(`./Icons/${iconId}.svg`, import.meta.url).href;
  }

  return (
    <div className="bg-gray-100 text-gray-900 flex justify-around items-center p-2 gap-2">
      <div className="bg-blue-100 p-2 rounded-xl h-32 w-32 flex items-center justify-center text-white">
        <img src={getImageUrl(id)} alt="" /> 
      </div>
      <h1>{name}</h1>
      <p>Quantity: {quantity}</p>
      <p>Price: {totalPrice}</p>
    </div>
  );
}
