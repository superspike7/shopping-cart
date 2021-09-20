import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function ItemCard(props) {
  const { name, price, id } = props;
  let { url } = useRouteMatch();

  function getImageUrl(iconId) {
    return new URL(`./Icons/${iconId}.svg`, import.meta.url).href;
  }

  return (
    <Link to={`${url}/${id}`} className="hover:border-4 border-green-500">
      <div className="bg-gray-100 text-gray-900 flex flex-col justify-center text-center items-center p-2 gap-4">
        <div className="bg-blue-100 p-5 rounded-xl h-32 w-32 flex items-center justify-center text-white">
          <img src={getImageUrl(id)} alt="" />
        </div>
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="font-bold text-white px-2 rounded-md bg-blue-500">
          {price}
        </p>
      </div>
    </Link>
  );
}
