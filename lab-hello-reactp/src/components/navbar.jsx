import React from "react";
import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconLeft = styled.img`
  margin-right: 10px;
`;

const IconRight = styled.img`
  margin-left: 10px;
`;

const navbar = () => {
  return (
    <div>
      <IconLeft src={logo} />
      <IconRight src={menu} />
    </div>
  );
};

export default navbar;
