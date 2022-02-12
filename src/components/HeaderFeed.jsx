import "./styles/HeaderFeed.scss";
import Perfil from "../assets/perfil.png";
import Logo from "../assets/logo-small.svg";
import Title from "../assets/title.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const HeaderFeed = () => {
  const {
    userData: { color },
  } = useContext(AppContext);
  return (
    <header className="HeaderFeed">
      <div className="HeaderFeedContainer">
        <Link to="/profile">
          <picture className="Perfil" style={{ backgroundColor: color }}>
            <img src={Perfil} alt="Perfil" />
          </picture>
        </Link>
        <picture>
          <img src={Logo} alt="Logo" />
        </picture>
      </div>
      <picture>
        <img src={Title} alt="Title" />
      </picture>
    </header>
  );
};

export { HeaderFeed };
