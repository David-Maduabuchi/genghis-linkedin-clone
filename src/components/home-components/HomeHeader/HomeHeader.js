import React, { useRef, useState } from "react";
import "./homeHeader.scss";

const HomeHeader = () => {
  const inputRef = useRef(null);
  const [inputFocused, setInputFocused] = useState(false);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="homeHeaderContainer">
      <div className="homeHeaderLogo">
        <img src="/linkedin.png" alt="" />
      </div>
      <div className="headerInputContainer">
        <div
          className={`homeHeaderInput ${inputFocused ? "grow" : ""}`}
          onClick={handleIconClick}
        >
          <img src="/search-icon.svg" alt="" />
          <input
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            ref={inputRef}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="homeHeaderNavIcons">
        {/* Here we have our home nav icons */}
        {/* HOME ICON */}
        <a href="##">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
          </svg>
          <div className="homeNavIconTitle">Home</div>
          {/* This is the Home Icon Badge */}
          <span className="badge">
            <span className="inner-badge"></span>
          </span>
        </a>
        {/* MY NETWORK ICON  */}
        <a href="##">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
          </svg>
          <div className="homeNavIconTitle">My Network</div>
        </a>
        {/* JOBS  */}
        <a href="##">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>
          <div className="homeNavIconTitle">Jobs</div>
        </a>
        {/* MESSAGING */}
        <a href="##">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
          </svg>
          <div className="homeNavIconTitle">Messaging </div>
        </a>
        {/* NOTIFICATIONS */}
        <a href="##">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z"></path>
          </svg>
          <div className="homeNavIconTitle">Notifications </div>
        </a>
        {/* USER PROFILE */}
        <div className="user-nav-profile">
          <img src="/user.svg" alt="" />
          <span>
            Me{" "}
            <img
              className="user-nav-profile-icon"
              src="/down-icon.svg"
              alt=""
            />{" "}
          </span>
        </div>
        {/* For Business */}
        <a href="##" className="for-business">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
          </svg>
          <span>
            For Business <img src="/down-icon.svg" alt="" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default HomeHeader;
