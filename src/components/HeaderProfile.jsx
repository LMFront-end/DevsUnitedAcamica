import { Link, useNavigate } from "react-router-dom";
import Back from "../assets/back.svg";
import Logout from "../assets/logout.svg";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./styles/HeaderProfile.scss";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebaseConfig";
const HeaderProfile = () => {
  const {
    userData: { username },
  } = useContext(AppContext);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  return (
    <header className="HeaderProfile">
      <div className="HeaderProfile_container">
        <Link to="/feed">
          <picture>
            <img src={Back} alt="back" />
          </picture>
        </Link>
        <h2>{username}</h2>
      </div>
      <button onClick={logOut}>
        LOGOUT
        <img src={Logout} alt="logout" />
      </button>
    </header>
  );
};

export { HeaderProfile };
