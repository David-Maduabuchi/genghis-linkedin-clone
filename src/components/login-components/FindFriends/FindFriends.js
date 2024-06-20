import "./FindFriends.scss";
const FindFriends = () => {
  return (
    <div className="findFriends">
      <div className="findFriendsLHS">
        <section>
          <h1>Who is LinkedIn for?</h1>
          <p>Anyone looking to navigate their professional life</p>
          <div className="findFriendsButtons">
            <div className="FriendsButton">
              Find a coworker or classmate
              <img src="arrow-head-right.svg" alt="" />
            </div>
            <div className="FriendsButton">
              Find a new job
              <img src="arrow-head-right.svg" alt="" />
            </div>
            <div className="FriendsButton">
              Find a course or training
              <img src="arrow-head-right.svg" alt="" />
            </div>
          </div>
        </section>
      </div>
      <div className="findFriendsRHS">
        <img src="findFriendsOnLinkedIn.png" alt="" />
      </div>
    </div>
  );
};

export default FindFriends;
