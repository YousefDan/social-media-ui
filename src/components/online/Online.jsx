import "./online.css";
const Online = ({ user: { profilePicture, username } }) => {
  return (
    <li className="onlineFriend">
      <div className="onlineProfileImgContainer">
        <img className="onlineProfileImg" src={profilePicture} alt="" />
        <span className="isOnline"></span>
      </div>
      <span className="onlineUsername">{username}</span>
    </li>
  );
};

export default Online;
