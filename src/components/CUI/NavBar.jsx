import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="cb">
        <div className="bs-container">
          <Button title={"buy"} />
          <Button title={'sell"'} />
        </div>

        <div className="border-box">
          <Button title={'sell"'} />
          <Button title={'sell"'} />
          <Button title={'sell"'} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
