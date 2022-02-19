import "./styles/Tweet.scss";
// import Perfil from "../assets/perfil.png";
import Favorite from "../assets/favorite.svg";
import FavoriteSet from "../assets/favorite-set.svg";
import Delete from "../assets/delete.svg";
import { useContext, useState } from "react";
import { UserName } from "./UserName";
import { AppContext } from "../context/AppContext";

const Tweet = ({ username, body, color, date, likes, uid, id }) => {
  const {
    userData: { photo },
  } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <article className="Tweet">
      <picture className="Tweet_perfil">
        <img src={photo} alt="Perfil" />
      </picture>
      <header>
        <div className="TweetContainer_header">
          <UserName content={username} />
          <p>- {date}.</p>
        </div>
        <button>
          <img src={Delete} alt="delete" />
        </button>
      </header>
      <p className="Tweet_content">{body}</p>
      <footer>
        <button onClick={() => setIsFavorite(!isFavorite)}>
          <img src={isFavorite ? FavoriteSet : Favorite} alt="like" />
        </button>
        <p style={isFavorite ? { color: "#F50D5A" } : { color: "white" }}>
          {likes.length}
        </p>
      </footer>
    </article>
  );
};

export { Tweet };
