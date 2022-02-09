import "./sidebar.css";
import SidebarFriendList from "./SidebarFriendList";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebarWrapper">
        <SidebarList />
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <SidebarFriendList />
      </div>
    </section>
  );
};

export default Sidebar;
