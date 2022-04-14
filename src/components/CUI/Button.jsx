import React from "react";

const Button = (props) => {
  return (
    <div className="button-container">
      <a className="button">{props.title}</a>
    </div>
  );
};

export default Button;
