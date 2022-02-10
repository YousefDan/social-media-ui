const SidebarFriendList = ({ users }) => {
  return (
    <ul className="sidebarFriendList">
      {users.map((user) => (
        <li key={user.id} className="sidebarFriend">
          <img
            className="sidebarFriendImg"
            src={user.profilePicture}
            alt={user.username}
          />
          <span className="sidebarFriendName">{user.username}</span>
        </li>
      ))}
    </ul>
  );
};

export default SidebarFriendList;
