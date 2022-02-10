import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

const Post = ({ post }) => {
  const { photo, date, desc, like, comment, userId } = post;
  const actualUser = Users.filter((u) => u.id === userId)[0].username;
  const userAvatar = Users.filter((u) => u.id === userId)[0].profilePicture;

  const [liked, setLiked] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  // Like Handler
  const likeHandler = () => {
    setLiked(isLiked ? liked - 1 : liked + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={userAvatar} alt="" />
            <span className="postUsername">{actualUser}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc && desc}</span>
          <img src={photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              onClick={likeHandler}
              className="likeIcon"
              src="/assets/like.png"
              alt=""
            />
            <img
              onClick={likeHandler}
              className="heartIcon"
              src="/assets/heart.png"
              alt=""
            />
            <span className="postLikeCounter">{liked}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
