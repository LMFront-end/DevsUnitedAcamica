import "./styles/Login.scss";
import Logo from "../assets/logo.svg";
import FormLogin from "../components/FormLogin";

const Login = () => {
  return (
    <main className="Login_page">
      <section className="Login_logo">
        <img src={Logo} alt="Logo" className="Login_logo-img" />
      </section>
      <>
        <FormLogin />
      </>
    </main>
  );
};

export default Login;
