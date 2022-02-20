import "./styles/Tweet.scss";
import Favorite from "../assets/favorite.svg";
import FavoriteSet from "../assets/favorite-set.svg";
import Delete from "../assets/delete.svg";
import { useContext, useState } from "react";
import { UserName } from "./UserName";
import { AppContext } from "../context/AppContext";
import { useLikeUser } from "../hooks/db/useLikeTweet";
import { SweetAlert } from "./SweetAlert";

const Tweet = ({ username, body, color, date, likes, uid, id, photo }) => {
  const {
    userData: { uid: uidUser },
  } = useContext(AppContext);
  const handleLike = useLikeUser(id, uid, likes);
  const [isDelete, setIsDelete] = useState(false);
  return (
    <article className="Tweet">
      <picture className="Tweet_perfil">
        <img src={photo} alt="Perfil" />
      </picture>
      <header>
        <div className="TweetContainer_header">
          <UserName content={username} color={color} />
          <p>- {date}.</p>
        </div>
        {uidUser === uid && (
          <button onClick={() => setIsDelete(!isDelete)}>
            <img src={Delete} alt="delete" />
          </button>
        )}
      </header>
      <p className="Tweet_content">{body}</p>
      <footer>
        <button onClick={handleLike}>
          <img src={likes.includes(uid) ? FavoriteSet : Favorite} alt="like" />
        </button>
        <p
          style={
            likes.includes(uid) ? { color: "#F50D5A" } : { color: "white" }
          }
        >
          {likes.length}
        </p>
      </footer>
      {isDelete && <SweetAlert handleClose={setIsDelete} id={id} />}
    </article>
  );
};

export { Tweet };
