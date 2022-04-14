import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: grey;
  height: 300px;

  display: flex;

  justify-content: center; //horizontally centers
  align-items: center; //vertical centers
`;

const Content = styled.div`
  background: black;
  width: 80px;
  height: 10px;
`;

const CenterDiv = () => {
  return (
    <Container>
      <Content />
      <Content />
      <Content />
      <Content />
    </Container>
  );
};

export default CenterDiv;
