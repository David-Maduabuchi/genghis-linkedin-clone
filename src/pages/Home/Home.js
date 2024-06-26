import React, { useEffect } from 'react'
import "./Home.scss"
import HomeProfile from '../../components/home-components/home-profile/HomeProfile';

const Home = () => {
   useEffect(() => {
     document.title = "Feed | LinkedIn-Clone";
   });
  return (
    <div className="home">
      <div className="home-profile">
      <HomeProfile />
      </div>
      <div className="home-mainFeed"></div>
      <div className="home-addToFeed"></div>
    </div>
  );
}

export default Home