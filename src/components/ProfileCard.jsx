import { UserName } from "./UserName";
import "./styles/ProfileCard.scss";
import Perfil from "../assets/perfil.png";

const ProfileCard = () => {
  const handleChangeBg = (node, sibling) => {
    sibling.classList.remove("Active");
    sibling.classList.add("NoActive");
    node.classList.remove("NoActive");
    node.classList.add("Active");
  };
  return (
    <section className="ProfileCard">
      <div className="ProfileCard_container">
        <picture>
          <img src={Perfil} alt="" />
        </picture>
        <UserName className="ProfileCardUserName" />
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
