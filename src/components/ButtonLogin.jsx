import "./styles/ButtonLogin.scss";
import LogoGoogle from "../assets/google-icon.svg";
import { useLoginWithGoogle } from "../hooks/auth/useLoginWithGoogle";

const ButtonLogin = () => {
  const loginWithGoogle = useLoginWithGoogle("/register");
  return (
    <button className="ButtonLogin" type="button" onClick={loginWithGoogle}>
      <picture>
        <img src={LogoGoogle} alt="" />
      </picture>
      <p className="ButtonLogin_p">Sign in with Google</p>
    </button>
  );
};

export default ButtonLogin;
