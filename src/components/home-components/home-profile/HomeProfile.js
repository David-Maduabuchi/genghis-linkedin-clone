import { useState } from "react";
import "./HomeProfile.scss";
import { NavLink } from "react-router-dom";

const HomeProfile = () => {
  const [isRecentsOpen, setIsRecentsOpen] = useState(false);
  const [isGroupsOpen, setIsGroupsOpen] = useState(false);
  return (
    <div className="homeProfileContainer">
      <div className="profileContainer">
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

      <div className="recents-groups">
        <section className="recents">
          <span>Recents</span>
          <img
            onClick={() => {
              setIsRecentsOpen(!isRecentsOpen);
            }}
            src={`${isRecentsOpen ? "/up-arrow.png" : "/down-arrow.png"}`}
            alt=""
            width={"12px"}
            height={12}
          />
        </section>
        {/* this controls the content of the recent groups that the user has been in */}
        <section className="recentsContent">
          {isRecentsOpen && <div>Coming Soon</div>}
        </section>
        <section className="groups">
          <NavLink to={""}>
            <span className="recentsBlueText">Groups</span>
          </NavLink>
          <img
            onClick={() => {
              setIsGroupsOpen(!isGroupsOpen);
            }}
            src={`${isGroupsOpen ? "/up-arrow.png" : "/down-arrow.png"}`}
            alt=""
            width={12}
            height={12}
          />
        </section>
        {/* This controls the content of some of the groups that the user is in */}
        <section className="groupsContent">
          {isGroupsOpen && <div>Coming Soon</div>}
        </section>
        <section className="events">
          <NavLink to={""}>
            <span className="recentsBlueText">Events</span>
          </NavLink>
          <img src="/plus-icon.svg" alt="" width={12} height={12} />{" "}
        </section>
        <section className="events followed-hashtags">
          <NavLink to={""}>
            <span className="recentsBlueText">Followed Hashtags</span>
          </NavLink>
        </section>
        <section className="saved-items">
          <span className="discover-more">
            <NavLink to={""} className={"discover-more"}>
              Discover more
            </NavLink>
          </span>
        </section>
      </div>
    </div>
  );
};

export default HomeProfile;
