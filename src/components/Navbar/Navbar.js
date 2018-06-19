import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>
      <li>DC Memory Game</li>
      <li id="rw">{props.rightWrong}</li>
      <li id="score">Score: {props.score}</li>
    </ul>
  </nav>
);

export default Navbar;
