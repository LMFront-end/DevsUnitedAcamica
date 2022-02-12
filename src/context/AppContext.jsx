import { createContext, useState } from "react";

const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: "",
    color: "",
    uid: "",
    photo: "",
  });

  const value = {
    userData,
    setUserData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider, AppContext };
