import React, { useEffect, useState } from "react";
import { Switch, useRouteMatch, Route, Link } from "react-router-dom";
import Item from "./Item";
import Items from "./Items";
import Cart from "./Cart";

export default function Shop() {
  const [cart, setCart] = useState([]);
  let { path, url } = useRouteMatch();

  function handleAddToCart(e, items) {
    e.preventDefault();
    setCart([...cart].concat(items))
  }

  return (
    <div className="">
      <nav className="text-center flex justify-center gap-5 mt-1 bg-blue-100">
        <Link to={`${url}/cart`} className="text-blue-500 underline font-bold px-1 hover:text-black">
          <h3>Cart: {cart.length}</h3>
        </Link>
      </nav>
      <Switch>
        <Route exact path={path}>
          <Items />
        </Route>
        <Route exact path={`${path}/cart`}>
          <Cart cartItems={cart} />
        </Route>
        <Route path={`${path}/:itemId`}>
          <Item handleAddToCart={handleAddToCart} />
        </Route>
      </Switch>
    </div>
  );
}
