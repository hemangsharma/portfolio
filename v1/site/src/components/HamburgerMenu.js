// src/components/HamburgerMenu.js
import React from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "gatsby";

// The clickable icon (only visible on mobile)
const MenuIcon = styled.div`
  display: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  z-index: 110;
  @media (max-width: 768px) {
    display: block;
  }
`;

// The mobile menu container that slides in.
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  height: 100vh;
  width: 60%;
  background-color: #111;
  padding: 60px 20px;
  transition: right 0.3s ease-in-out;
  z-index: 105;
`;

// Styling for the mobile navigation links.
const MobileNavLink = styled(Link)`
  margin: 15px 0;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
`;

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <MobileMenu isOpen={isOpen}>
        <MobileNavLink to="#about" onClick={() => setIsOpen(false)}>
          About
        </MobileNavLink>
        <MobileNavLink to="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </MobileNavLink>
        <MobileNavLink to="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </MobileNavLink>
      </MobileMenu>
    </>
  );
};

export default HamburgerMenu;