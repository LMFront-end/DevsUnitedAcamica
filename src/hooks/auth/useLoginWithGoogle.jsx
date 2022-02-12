import { app } from "../../firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const useLoginWithGoogle = (nextRoute = "/") => {
  const { setUserData } = useContext(AppContext);
  const navigate = useNavigate();
  const LoginWithGoogle = () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((userCredentials) => {
        navigate(nextRoute);
        setUserData((userData) => {
          return {
            ...userData,
            uid: userCredentials.user.uid,
          };
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return LoginWithGoogle;
};

export { useLoginWithGoogle };
