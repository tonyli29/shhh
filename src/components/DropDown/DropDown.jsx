import React from "react";
import styled from "styled-components";

const Drop = styled.div`
  width: 100px;
  height: 100px;
  background-color: grey;
  position: absolute;
  top: 167px;
  transform: translate(50%); // moves from center 50%
`;

const DropDown = () => {
  return <Drop />;
};

export default DropDown;
