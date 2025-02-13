// src/components/LoadingScreen.js
import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

// A container that covers the entire screen
const LoaderContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

// Styling for your logo image
const LogoImage = styled.img`
  width: 150px;
  height: auto;
`;

const LoadingScreen = ({ setLoaded }) => {
  // This fade-out animation keeps the loader visible for 2 seconds
  const fadeOutProps = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 2000, // Delay before starting fade out
    onRest: () => setLoaded(true), // Notify when animation completes
  });

  return (
    <LoaderContainer style={fadeOutProps}>
      <LogoImage src="/logo.png" alt="Logo" />
    </LoaderContainer>
  );
};

export default LoadingScreen;