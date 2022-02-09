const SidebarFriendList = () => {
  return (
    <ul className="sidebarFriendList">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
        (item, index) => (
          <li key={index} className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src={`/assets/person/${item}.jpeg`}
              alt=""
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
        )
      )}
    </ul>
  );
};

export default SidebarFriendList;
