import React from "react";
import "./Card.css";

// const Card = props => (
//   <div className="wrapper" onClick={props.clickfx}>
//     <img src={props.children.image} />
//   </div>
// );

const Card = props => (
  <div
    className="card"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;
