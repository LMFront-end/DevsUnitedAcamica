import Logo from "../assets/logo.svg";
import { FormRegister } from "../components/FormRegister";
import "./styles/Register.scss";
const Register = () => {
  return (
    <section className="Register">
      <section className="Login_logo">
        <img src={Logo} alt="Logo" className="Login_logo-img" />
      </section>
      <FormRegister />
    </section>
  );
};

export default Register;
