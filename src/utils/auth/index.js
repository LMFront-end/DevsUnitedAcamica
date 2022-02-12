import { app } from "../../firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginWithGoogle = (cb = () => {}) => {
  try {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      return cb("/register");
    });
  } catch (error) {
    console.log(error);
  }
};

export { LoginWithGoogle };
