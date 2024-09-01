import React from "react";
import "./post.scss";

const Posts = (props) => {
  return (
    <div className="posts-container">
        {/* POST HEADER */}
      <div className="post-container-header">
        <div className="post-image-container">
          <img src="/convo.rhs.png" alt="" />
        </div>
        <div className="post-header-info">
          <span className="post-username">Maduabuchi David</span>
          <br />
          <span className="post-jobTitle">Software Engineer</span>
          <br />
          <div className="post-dateCreated">
            <span className="date">1w</span>
            <span className="dot"></span>
            <img src="/world.svg" alt="" />
          </div>
        </div>
        <div className="actions-button">
            <img src="/horizontal-ellipsis.svg" alt="" />
        </div>
      </div>
      {/* END OF POST HEADER */}
    </div>
  );
};

export default Posts;
