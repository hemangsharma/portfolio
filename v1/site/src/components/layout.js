// src/components/Layout.js
import React from "react";
import Header from "Header";
import styled from "styled-components";

// The main content area with a black background and white text.
const Main = styled.main`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  overflow-x: hidden;
  padding-top: 80px; /* Leave space for the fixed header */
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;