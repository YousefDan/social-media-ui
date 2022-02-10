import "./sidebar.css";
import SidebarFriendList from "./SidebarFriendList";
import SidebarList from "./SidebarList";
import { Users } from "../../dummyData";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebarWrapper">
        <SidebarList />
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <SidebarFriendList users={Users} />
      </div>
    </section>
  );
};

export default Sidebar;
