import { NavLink } from "react-router-dom";
import "./HomeAddToFeed.scss";
import { useEffect, useRef, useState } from "react";

import {
  BusinessServicesData,
  PrivacyData,
  homeAddToheaderData,
} from "../../../data";
const HomeAddToFeed = () => {
  //this is to control the behaviour of my pop up
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isBusinessPopupOpen, setIsBusinessPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const openBusinessPopup = () => {
    setIsBusinessPopupOpen(true);
  };

  const openPrivacyPopup = () => {
    setIsPrivacyOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setIsBusinessPopupOpen(false);
    setIsPrivacyOpen(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    if (isPopupOpen || isBusinessPopupOpen || isPrivacyOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="HomeAddToFeedContainer">
      <div className="container-for-diffUsers">
        <div className="home-add-header">
          <h1>Add to your feed</h1>
          <img src="/feed-icon.svg" alt="" onClick={openPopup} />
          {isPopupOpen && (
            <div className="popup home-add-popup" ref={popupRef}>
              Follow things that interest you to personalize your feed.{" "}
              <NavLink to={""} className={"popup-link"}>
                Learn More
              </NavLink>
            </div>
          )}
        </div>

        <div className="home-addToFeed-people">
          {/* I will probably replace this with a lot of dummy users im my database later */}
          {homeAddToheaderData.map((user, index) => (
            <div className="usersContainer" key={index}>
              <img src={user.img} alt="" />
              <div className="userDataContainer">
                <h1>{user.name}</h1>
                <h5>{user.skill}</h5>
                <button>
                  <img src="/plus-icon.svg" alt="" />
                  Follow
                </button>
              </div>
            </div>
          ))}

          <div className="view-all-recommendations">
            View All Recommendations <img src="/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
      {/* this is the footer of the whole project */}
      <div className="footer">
        <div className="addToFeedFooter">
          <NavLink to={""} className={"navlinks"}>
            <span className="footerLinks">About</span>
          </NavLink>
          <NavLink to={""} className={"navlinks"}>
            <span className="footerLinks">Acessibility</span>
          </NavLink>
          <NavLink to={""} className={"navlinks"}>
            <span className="footerLinks">Help Center</span>
          </NavLink>
          <div to={""} className={"navlinks"} onClick={openPrivacyPopup}>
            <span className="footerLinks">Privacy & terms</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
            >
              <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
            </svg>

            {isPrivacyOpen && (
              <div className="business-popup " ref={popupRef}>
                {PrivacyData.map((service, index) => (
                  <div
                    key={index}
                    className="business-popup-links privacy-popup-links"
                  >
                    <NavLink to={service.link}>
                      <h1>{service.title}</h1>
                      <p>{service.description}</p>
                    </NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
          <NavLink to={""} className={"navlinks"}>
            <span className="footerLinks">Ad Choices</span>
          </NavLink>{" "}
          <NavLink to={""} className={"navlinks"}>
            <span className="footerLinks">Advertising</span>
          </NavLink>
          <div to={""} className={"navlinks"} onClick={openBusinessPopup}>
            <span className="footerLinks">Business Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
            >
              <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
            </svg>
            {isBusinessPopupOpen && (
              <div className="business-popup" ref={popupRef}>
                {BusinessServicesData.map((service, index) => (
                  <div key={index} className="business-popup-links">
                    <NavLink to={service.link}>
                      <h1>{service.title}</h1>
                      <p>{service.description}</p>
                    </NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
          <NavLink to={""} className={"navlinks"}>
            <span className="footerLinks">Get the LinkedIn App</span>
          </NavLink>
          <NavLink to={""} className={"navlinks"}>
            <span className="footerLinks">More</span>
          </NavLink>
        </div>
      </div>
      {/* the base of the whole project */}
      <div className="base">
        <img src="/home-tiny-logo.svg" alt="" /><span>LinkedIn Corporation © 2024</span>
      </div>
      
    </div>
  );
};

export default HomeAddToFeed;
