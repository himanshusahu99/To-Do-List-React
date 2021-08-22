import React from "react";
import logo from "../assets/images/logo.png";
import { SiTodoist } from "react-icons/si";

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="Todo List     " srcset="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
