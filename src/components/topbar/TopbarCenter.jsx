import { Search } from "@material-ui/icons";

const TopbarCenter = () => {
  return (
    <div className="topbarCenter">
      <div className="searchbar">
        <Search className="searchIcon" />
        <input
          type="text"
          className="searchInput"
          placeholder="Search for friend, post or video"
        />
      </div>
    </div>
  );
};

export default TopbarCenter;
