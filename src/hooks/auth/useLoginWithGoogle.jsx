import { app } from "../../firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const db = getFirestore(app);

const toValidateUserInDb = async (uid) => {
  const user = doc(db, "users", uid);
  const userRef = await getDoc(user);
  return userRef.exists();
};

const useLoginWithGoogle = (nextRoute = "/") => {
  const navigate = useNavigate();
  const { setUserData } = useContext(AppContext);
  const LoginWithGoogle = () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((userCredentials) => {
        const userDataPost = {
          uid: userCredentials.user.uid,
          photo: userCredentials.user.photoURL,
        };
        toValidateUserInDb(userDataPost.uid).then((res) => {
          if (res) {
            setUserData((userData) => {
              return { ...userData, uid: userDataPost.uid };
            });
            navigate("/feed");
          } else {
            setDoc(doc(db, "users", userDataPost.uid), userDataPost);
            setUserData((userData) => {
              return { ...userData, uid: userDataPost.uid };
            });
            navigate(nextRoute);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  return LoginWithGoogle;
};

export { useLoginWithGoogle };
