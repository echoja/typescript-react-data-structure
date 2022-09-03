import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center h-16 gap-3 px-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/simple-string">Simple String</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
