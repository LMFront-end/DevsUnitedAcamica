import { UserName } from "./UserName";
import "./styles/ProfileCard.scss";
import Perfil from "../assets/perfil.png";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const ProfileCard = () => {
  const {
    userData: { username, color },
  } = useContext(AppContext);
  const handleChangeBg = (node, sibling) => {
    sibling.classList.remove("Active");
    sibling.classList.add("NoActive");
    node.classList.remove("NoActive");
    node.classList.add("Active");
  };
  return (
    <section className="ProfileCard">
      <div className="ProfileCard_container">
        <picture style={{ backgroundColor: color }}>
          <img src={Perfil} alt="" />
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
          }}
        >
          POSTS
        </section>
        <section
          className="NoActive"
          onClick={(e) => {
            handleChangeBg(e.target, e.target.previousSibling);
          }}
        >
          FAVORITES
        </section>
      </nav>
    </section>
  );
};

export { ProfileCard };
