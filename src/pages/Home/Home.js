import React, { useEffect } from "react";
import "./Home.scss";
import HomeProfile from "../../components/home-components/home-profile/HomeProfile";
import HomeAddToFeed from "../../components/home-components/home-addToFeed/HomeAddToFeed";

const Home = () => {
  useEffect(() => {
    document.title = "Feed | LinkedIn-Clone";
  });
  return (
    <div className="home">
      <div className="scrollcontainer">
        <div className="home-profile">
          <HomeProfile />
        </div>
        <div className="home-mainFeed"></div>
      </div>

      <div className="home-addToFeed">
        <HomeAddToFeed /> 
      </div>
    </div>
  );
};

export default Home;
