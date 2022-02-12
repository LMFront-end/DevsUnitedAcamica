import "./styles/Tweet.scss";
import Perfil from "../assets/perfil.png";
import Favorite from "../assets/favorite.svg";
import FavoriteSet from "../assets/favorite-set.svg";
import Delete from "../assets/delete.svg";
import { useState } from "react";
import { UserName } from "./UserName";

const Tweet = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <article className="Tweet">
      <picture className="Tweet_perfil">
        <img src={Perfil} alt="Perfil" />
      </picture>
      <header>
        <div className="TweetContainer_header">
          <UserName />
          <p>- 5 jun.</p>
        </div>
        <button>
          <img src={Delete} alt="delete" />
        </button>
      </header>
      <p className="Tweet_content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
      <footer>
        <button onClick={() => setIsFavorite(!isFavorite)}>
          <img src={isFavorite ? FavoriteSet : Favorite} alt="like" />
        </button>
        <p style={isFavorite ? { color: "#F50D5A" } : { color: "white" }}>
          100
        </p>
      </footer>
    </article>
  );
};

export { Tweet };
