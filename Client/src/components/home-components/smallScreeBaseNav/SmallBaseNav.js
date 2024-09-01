import { NavLink } from "react-router-dom";
import "./SmallBaseNav.scss";
import { useState } from "react";
const SmallBaseNav = () => {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [disableSpan, setDisableSpan] = useState(false);

  const handleNavClick = (itemName) => {
    setActiveNavItem(itemName);
    removeNotificationSpan();
  };

  const removeNotificationSpan = () => {
    setDisableSpan(true);
  };

  return (
    <div className="smallBaseNavContainer">
      {/* HOME */}
      <NavLink to={"/dashboard/home"}>
        <section
          className={`nav-item ${activeNavItem === "Home" ? "active" : ""}`}
          onClick={() => handleNavClick("Home")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
          </svg>
          <div className="homeNavIconTitle ">Home</div>
          {/* This is the Home Icon Badge */}
          <span className="badge">
            <span className="inner-badge"></span>
          </span>
        </section>
      </NavLink>

      {/* MY NETWORK */}
      <NavLink to={"/dashboard/home"}>
        {" "}
        <section
          className={`nav-item ${
            activeNavItem === "my-network" ? "active" : ""
          }`}
          onClick={() => handleNavClick("my-network")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
          </svg>
          <div className="homeNavIconTitle">My Network</div>
        </section>
      </NavLink>

      {/* Post */}
      <NavLink to={""}>
        <section
          className={`nav-item ${
            activeNavItem === "post" ? "active" : ""
          }`}
          onClick={() => handleNavClick("post")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            width={24}
            height={24}
            fill="currentColor"
          >
            <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-5 8h4v2h-4v4h-2v-4H7v-2h4V7h2z"></path>
          </svg>
          <div className="homeNavIconTitle">Post</div>
        </section>
      </NavLink>

      {/* NOTIFICATIONS */}
      <NavLink to={""}>
        <section
          className={`nav-item ${
            activeNavItem === "notifications" ? "active" : ""
          } ${disableSpan && "disable-span"}`}
          onClick={() => handleNavClick("notifications")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
          </svg>
          <div className="homeNavIconTitle">Notifications</div>
          <span className="badge">
            <span className="inner-badge notification-badge">3</span>
          </span>
        </section>
      </NavLink>

      <NavLink to={""}>
        <section
          className={`nav-item ${activeNavItem === "jobs" ? "active" : ""}`}
          onClick={() => handleNavClick("jobs")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>
          <div className="homeNavIconTitle">Jobs</div>
        </section>
      </NavLink>
    </div>
  );
};

export default SmallBaseNav;
