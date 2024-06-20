import { useState } from "react";
import { LoginSkills } from "../../../data";
import "./ConnectAndLearn.scss";

const ConectAndLearn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div
      onClick={() => {
        isOpen && setIsOpen(false);
      }}
    >
      <div className="connectAndLearn">
        <div className="connect-with-people">
          <img src="connectWithPeople.svg" alt="" />
          <h2>Connect with people who can help</h2>
          <button>Find people you know</button>
        </div>
        <div className="learnSkills">
          <img src="learnSkills.svg" alt="" />
          <h2>Learn the skills you need to succeed</h2>
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
              <span className="connectRHStext">
                Choose a topic to learn about
              </span>

              <img
                style={{
                  width: 18,
                  height: 18,
                }}
                src="down-arrow.png"
                alt=""
                className="ConnectDownArrow"
              />
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                {LoginSkills.map((option, index) => (
                  <li key={index} className="dropdown-item">
                    <a className="optionLink" href="##">
                      <span className="connect-itemheader">{option.skill}</span>
                      <span className="courses">{option.noOfCourses}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConectAndLearn;
