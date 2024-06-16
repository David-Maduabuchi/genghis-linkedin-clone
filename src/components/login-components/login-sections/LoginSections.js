import "./login-sections.scss";
import React, { useState } from "react";
const LoginSections = ({ header, description, buttons, buttonHeader, coloredBackground }) => {
  const [showMore, setShowMore] = useState(false);
  const visibleButtonsCount = 10; // Number of buttons to show initially

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleButtons = showMore
    ? buttons
    : buttons.slice(0, visibleButtonsCount);

  return (
    <div
      className={`sections-container ${
        coloredBackground === "" && "section-colored-header"
      }`}
    >
      <div className="sections-header">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
      <div className="diff-buttons-first-batch">
        <h3>{buttonHeader}</h3>
        {visibleButtons.map((item, index) => (
          <button
            key={index}
            className={item.id === "colored-one" ? "last-button" : ""}
            style={{ color: item.color, border: `1px solid ${item.color}` }}
          >
            {item.buttonName}
          </button>
        ))}
        <div className="show-more-show-less">
          {buttons.length > visibleButtonsCount && (
            <button className="toggle-button" onClick={toggleShowMore}>
              {showMore ? "Show Less" : "Show More"}
              <img src={showMore ? "up-arrow.png" : "down-arrow.png"} alt="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSections;
