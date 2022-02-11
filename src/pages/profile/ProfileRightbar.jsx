import "./profileRightbar.css";

const ProfileRightbar = () => {
  return (
    <div className="profileRightbar">
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        {[2, 3, 4, 5, 6, 7].map((item) => (
          <div key={item} className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`/assets/person/${item}.jpeg`}
              alt=""
            />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileRightbar;
