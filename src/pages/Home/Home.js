import React, { useEffect } from 'react'
import "./Home.scss"

const Home = () => {
   useEffect(() => {
     document.title = "Feed | LinkedIn-Clone";
   });
  return (
    <div className="home">
      <div className="home-profile"></div>
      <div className="home-mainFeed"></div>
      <div className="home-addToFeed"></div>
    </div>
  );
}

export default Home