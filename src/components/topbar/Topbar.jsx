import "./topbar.css";
import TopbarCenter from "./TopbarCenter";
import TopbarLeft from "./TopbarLeft";
import TopbarRight from "./TopbarRight";

const Topbar = () => {
  return (
    <section className="topbarContainer">
       <TopbarLeft />
       <TopbarCenter />
       <TopbarRight />
    </section>
  );
};

export default Topbar;
