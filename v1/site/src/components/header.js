// src/components/Header.js
import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "gatsby";

// The container for the header, fixed at the top.
const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
`;

// Logo styling
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none; /* Hide these links on mobile */
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          DataSci Logo
        </Link>
      </Logo>
      <NavLinks>
        <Link to="#about" style={{ color: "#fff", textDecoration: "none" }}>
          About
        </Link>
        <Link to="#projects" style={{ color: "#fff", textDecoration: "none" }}>
          Projects
        </Link>
        <Link to="#contact" style={{ color: "#fff", textDecoration: "none" }}>
          Contact
        </Link>
      </NavLinks>
      <HamburgerMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
    </HeaderContainer>
  );
};

export default Header;
