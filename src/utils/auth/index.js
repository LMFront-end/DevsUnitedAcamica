import { app } from "../../firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const LoginWithGoogle = async () => {
  try {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const userData = await signInWithPopup(auth, provider);
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

export { LoginWithGoogle };
