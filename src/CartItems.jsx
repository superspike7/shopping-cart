import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function CartItems(props) {
  const { name, price, id} = props;
  let { url } = useRouteMatch();

  return (
    <div className="bg-gray-100 text-gray-900 flex flex-col justify-center items-center p-2 gap-2">
      <div className="bg-blue-500 h-32 w-32 flex items-center justify-center text-white">
        image
      </div>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}
