import { NavLink } from "react-router-dom";
import "./HomeAddToFeed.scss";
import { useEffect, useRef, useState } from "react";
const HomeAddToFeed = () => {
  // get this shit from a database bro
  const homeAddToheaderData = [
    {
      id: 1,
      name: "David Maduabuchi",
      img: "/user.svg",
      jobTitle: "Software Developer",
      skill: "Reactjs, VueJs, AngularJs, HTML",
    },
    {
      id: 2,
      name: "Nnaekpe Nnaemeka",
      img: "/user.svg",
      jobTitle: "Game Developer",
      skill: "Unity, C++, Maya, Blender, HTML",
    },
    {
      id: 3,
      name: "Ezendidika Sandra",
      img: "/user.svg",
      jobTitle: "Research Scientist",
      skill: "Biology, Chemistry, Physics",
    },
  ];

  //this is to control the behaviour of my pop up
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
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
          View All Recommendations{" "}
          <img src="/arrow-right.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAddToFeed;
