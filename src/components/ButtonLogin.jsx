import "./styles/ButtonLogin.scss";
import LogoGoogle from "../assets/google-icon.svg";
import { LoginWithGoogle } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const ButtonLogin = () => {
  const navigate = useNavigate();
  return (
    <button
      className="ButtonLogin"
      type="button"
      onClick={() => LoginWithGoogle(navigate)}
    >
      <picture>
        <img src={LogoGoogle} alt="" />
      </picture>
      <p className="ButtonLogin_p">Sign in with Google</p>
    </button>
  );
};

export default ButtonLogin;
