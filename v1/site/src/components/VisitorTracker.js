// src/components/VisitorTracker.js
import React, { useEffect } from "react";

const VisitorTracker = () => {
  useEffect(() => {
    // Replace the URL below with the actual URL where your PHP script is hosted.
    fetch("https://yourserver.com/capture.php")
      .then((response) => response.json())
      .then((data) => console.log("Visitor logged:", data))
      .catch((error) => console.error("Error logging visitor:", error));
  }, []);

  return null; // This component does not render anything visible.
};

export default VisitorTracker;
