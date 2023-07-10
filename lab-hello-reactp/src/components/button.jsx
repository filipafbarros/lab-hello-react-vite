import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  color: black;
  border-radius: 5px;
`;

const Button = () => {
  return <StyledButton>Awesome!</StyledButton>;
};

export default Button;
