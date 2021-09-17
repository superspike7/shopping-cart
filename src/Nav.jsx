import { Link } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <ul className="flex justify-center gap-5">
      <li>
        <Link to="/" className="underline hover:text-blue-500 font-light text-2xl">Home</Link>
      </li>
      <li>
        <Link to="/shop" className="underline hover:text-blue-500 font-light text-2xl">Shop</Link>
      </li>
    </ul>
  );
}
