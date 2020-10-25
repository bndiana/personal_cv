import React from "react";
import "./ButtonReuse.css";

const ButtonReuse = (props) => {
  return (
    <button className="button-css" onClick={props.action}>
      {props.children}
    </button>
  );
};

export default ButtonReuse;
