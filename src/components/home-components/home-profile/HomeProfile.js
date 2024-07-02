import "./HomeProfile.scss";

const HomeProfile = () => {
  return (
    <div className="homeProfileContainer">
      <section>
        <div className="profilePishurContainer">
          <img className="card-svg" src="/card-bg.svg" alt="" />
          <img className="profilepishur" src="/user.svg" alt="" />
        </div>
        {/* Here is the name of the developer and te associated profession */}
        <div className="profile-userName">David Maduabuchi</div>
        <div className="jobtitle">Full Stack Developer</div>
      </section>

      {/* Post Impression and profile views */}
      <section className="profileAnalytics">
        <div>
          <span>Profile Viewers</span>
          <span className="blueText">{"17"}</span>
        </div>
        <div>
          <span>Post Impressions</span>
          <span className="blueText">{"120"}</span>
        </div>
      </section>

      <section className="home-reactivateAI">
        <span>Strengthen your profile with an AI writing assistant</span>
        <span className="reactivate-AI-Text">
          <div className="small-brown-square"></div>
          Reactivate premium: 50% Off
        </span>
      </section>

      <section className="savedItems">
        <img src="/bookmark.svg" alt="" />
        <span>Saved Items</span>
      </section>
    </div>
  );
};

export default HomeProfile;
