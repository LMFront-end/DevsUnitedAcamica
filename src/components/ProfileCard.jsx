import { UserName } from "./UserName";
import "./styles/ProfileCard.scss";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const {
    userData: { username, color, photo },
  } = useContext(AppContext);
  const handleChangeBg = (node, sibling) => {
    sibling.classList.remove("Active");
    sibling.classList.add("NoActive");
    node.classList.remove("NoActive");
    node.classList.add("Active");
  };
  const navigate = useNavigate();
  return (
    <section className="ProfileCard">
      <div className="ProfileCard_container">
        <picture style={{ backgroundColor: color }}>
          <img src={photo} alt="" />
        </picture>
        <UserName
          className="ProfileCardUserName"
          content={username}
          color={color}
        />
      </div>
      <nav>
        <section
          className="Active"
          onClick={(e) => {
            handleChangeBg(e.target, e.target.nextSibling);
            navigate("/profile/posts");
          }}
        >
          POSTS
        </section>
        <section
          className="NoActive"
          onClick={(e) => {
            handleChangeBg(e.target, e.target.previousSibling);
            navigate("/profile/favorites");
          }}
        >
          FAVORITES
        </section>
      </nav>
    </section>
  );
};

export { ProfileCard };
