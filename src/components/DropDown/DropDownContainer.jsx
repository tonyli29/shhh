import React, { useState } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";

const Container = styled.div`
  background: red;
  height: 300px;

  display: flex;

  justify-content: center; //horizontally centers
  align-items: center; //vertical centers
`;

const Button = styled.button`
  background: blue;
  border-radius: 20%;
  padding: 5px;
  color: white;
`;

const DropDownContainer = () => {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Button onClick={() => handleOnClick()}>Drop</Button>
      {open && <DropDown />}
    </Container>
  );
};

export default DropDownContainer;
