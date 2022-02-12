import { Link } from "react-router-dom";
import Back from "../assets/back.svg";
import Logout from "../assets/logout.svg";
import "./styles/HeaderProfile.scss";
const HeaderProfile = () => {
  return (
    <header className="HeaderProfile">
      <div className="HeaderProfile_container">
        <Link to="/feed">
          <picture>
            <img src={Back} alt="back" />
          </picture>
        </Link>
        <h2>username</h2>
      </div>
      <button>
        LOGOUT
        <img src={Logout} alt="logout" />
      </button>
    </header>
  );
};

export { HeaderProfile };
