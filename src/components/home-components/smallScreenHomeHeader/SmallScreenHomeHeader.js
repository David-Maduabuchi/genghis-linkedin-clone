import "./SmallScreenHomeHeader.scss";
import React, { useRef } from "react";

const SmallScreenHomeHeader = () => {
  
  const inputRef = useRef(null);

   const handleIconClick = () => {
     if (inputRef.current) {
       inputRef.current.focus();
     }
   };
  return (
    <div className="smallHeaderContainer">
      {/* this is for the profile svg */}
      <a href="##">
        <img className="user-icon" src="/user.svg" alt="" />
      </a>

      <div onClick={()=> {handleIconClick()}} className="searchContainer">
        <img src="/search-icon.svg" alt="" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
        />
      </div>

      <a href="##">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
        </svg>
      </a>
    </div>
  );
};

export default SmallScreenHomeHeader;
