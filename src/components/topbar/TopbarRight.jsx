import { Person, Chat, Notifications } from "@material-ui/icons";

const TopbarRight = () => {
  return (
    <div className="topbarRight">
      <div className="topbarLinks">
        <span className="topbarLink">Home</span>
        <span className="topbarLink">Timeline</span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
  );
};

export default TopbarRight;
