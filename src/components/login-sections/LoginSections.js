    // src/components/LoginSections.js
import React, { useState } from "react";

const LoginSections = ({ header, description, buttons }) => {
  const [showMore, setShowMore] = useState(false);
  const visibleButtonsCount = 10; // Number of buttons to show initially

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleButtons = showMore ? buttons : buttons.slice(0, visibleButtonsCount);

  return (
    <div
      className="sections-container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <div className="sections-header" style={{ flex: 1 }}>
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
      <div
        className="diff-buttons-first-batch"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        {visibleButtons.map((item, index) => (
          <button
            key={index}
            style={{
              color: item.color,
              padding: "12px 24px",
              margin: "0 6px 12px 0",
              borderRadius: 24,
              cursor: "pointer",
              fontSize: 16,
              boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.75)",
              border: "1px solid red",
            }}
          >
            {item.buttonName}
          </button>
        ))}
        {buttons.length > visibleButtonsCount && (
          <button
            onClick={toggleShowMore}
            style={{
              padding: "12px 24px",
              margin: "0 6px 12px 0",
              borderRadius: 24,
              cursor: "pointer",
              fontSize: 16,
              backgroundColor: "#eee",
              boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.75)",
              border: "1px solid #ccc",
            }}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginSections;
