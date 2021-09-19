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

  useEffect(()=>{
    console.log(cart)
  },[cart])

  return (
    <div className="">
      <nav className="text-center flex justify-center gap-5 mt-1 bg-blue-100">
        <h3>Items: {cart.length}</h3>
        <Link to={`${url}/cart`} className="bg-green-500 rounded-md text-white px-1">
          Checkout
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
