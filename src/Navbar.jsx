import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <header>
      <h1 className="logo">Vietline Coffee <i class="bi bi-cup-hot-fill"></i></h1>
      <nav className="">
        <ul className="nav_lists">
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <a className="tt" href="#">
        <button>Contact</button>
      </a>
    </header>
  );
};

export default Navbar;
