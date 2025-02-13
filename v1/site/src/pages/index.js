// src/pages/index.js
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import LoadingScreen from "../components/LoadingScreen";
import ThreeScene from "../components/ThreeScene";
import VisitorTracker from "../components/VisitorTracker";
import styled from "styled-components";

// A styled section for each part of the page.
const Section = styled.section`
  padding: 100px 20px;
  text-align: center;
`;

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false);

  // Ensure the loading screen shows for at least 2.5 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Render the visitor tracker to log visitor info */}
      <VisitorTracker />

      {/* Show loading screen until the page is ready */}
      {!loaded && <LoadingScreen setLoaded={setLoaded} />}
      {loaded && (
        <Layout>
          <Section id="about">
            <h1>Welcome to My Data Science Portfolio</h1>
            <p>
              Explore projects, interactive 3D visuals, and more on this dynamic website.
            </p>
          </Section>
          <Section id="projects">
            <h2>Projects</h2>
            {/* Display the 3D scene */}
            <ThreeScene />
          </Section>
          <Section id="contact">
            <h2>Contact</h2>
            <p>Email: example@example.com</p>
          </Section>
        </Layout>
      )}
    </>
  );
};

export default IndexPage;