import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import {Posts} from "../../dummyData"

const Feed = () => {
  return (
    <section className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </section>
  );
};

export default Feed;
