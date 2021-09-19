import React, { useEffect, useState } from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import Item from "./Item";
import Items from "./Items";

export default function Shop() {
  const [cart, setCart] = useState([]);
  let { path } = useRouteMatch();

  function handleAddToCart(e, items) {
    e.preventDefault();
    console.log(items);
  }

  return (
    <div className="">
      <nav className="text-center flex justify-center gap-5 mt-1 bg-blue-100">
        <h3>Items: 0</h3>
        <button className="bg-green-500 rounded-md text-white px-1">
          Checkout
        </button>
      </nav>
      <Switch>
        <Route exact path={path}>
          <Items />
        </Route>
        <Route path={`${path}/:itemId`}>
          <Item handleAddToCart={handleAddToCart} />
        </Route>
      </Switch>
    </div>
  );
}
