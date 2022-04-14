import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: gred;
  height: 300px;

  display: flex;
  justify-content: center;
`;

const Button = styled.button``;

const Popup = () => {
  return (
    <Container>
      <Button>Popup</Button>
    </Container>
  );
};

export default Popup;
