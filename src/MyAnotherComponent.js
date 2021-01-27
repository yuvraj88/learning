import React from "react";
import "./buttonStyle.css";
export default function MyAnotherComponent(props) {
  return (
    <button className="my-button">MyAnotherComponent {props.value}</button>
  );
}
