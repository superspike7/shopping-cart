import React from "react";

export default function ItemCard(props) {
  const { name, price, id, handleClick } = props;
  return (
    <div className="bg-gray-100 text-gray-900 flex flex-col justify-center items-center p-2 gap-2">
      <div className="bg-blue-500 h-32 w-32 flex items-center justify-center text-white">
        image
      </div>
      <h1>{name}</h1>
      <p>{price}</p>
      <button onClick={() => handleClick(id)} className="bg-blue-500 text-white font-bold px-2 rounded-md">
        more info 
      </button>
    </div>
  );
}
