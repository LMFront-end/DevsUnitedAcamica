import { createContext, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../firebaseConfig";

const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: "",
    color: "",
    uid: "",
    photo: "",
  });
  const db = getFirestore(app);

  const getUserDataFromDb = async () => {
    const userRef = doc(db, "users", userData.uid);
    const user = await getDoc(userRef);
    setUserData(user.data());
  };

  const value = {
    userData,
    setUserData,
    getUserDataFromDb,
    db,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider, AppContext };
