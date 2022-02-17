import { useContext, useState } from "react";
import { colors } from "../hooks/colors";
import { Link } from "react-router-dom";
import "./styles/FormRegister.scss";
import { updateDoc, getFirestore, doc } from "firebase/firestore";
import { app } from "../firebaseConfig";
import { AppContext } from "../context/AppContext";

const FormRegister = () => {
  const [colorsInfo, setColorsInfo] = useState(colors);
  const { userData } = useContext(AppContext);
  const [selectColor, setSelectColor] = useState(colors[0]);
  const [userName, setUserName] = useState("NAME");
  const db = getFirestore(app);

  const handleSelect = (id) => {
    const newColors = colors.map((square) => {
      if (square.id === id) {
        square.select = true;
        setSelectColor(square);
        return square;
      } else {
        square.select = false;
        return square;
      }
    });
    setColorsInfo(newColors);
  };
  const styleSelect = (id, color) => {
    if (id === selectColor.id) {
      return { borderColor: "white", backgroundColor: color };
    } else {
      return { borderColor: "transparent", backgroundColor: color };
    }
  };

  const handleSubmit = () => {
    const userRef = doc(db, "users", userData.uid);
    updateDoc(userRef, {
      color: selectColor.color,
      username: userName,
    });
  };

  return (
    <form className="Form_register">
      <h2>
        Welcome <br />
        <span style={{ color: selectColor.color }}>{userName}!</span>
      </h2>
      <input
        type="text"
        placeholder="type your username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>Select your favorite color</p>
      <section className="Select_colors">
        {colorsInfo.map((square) => (
          <div
            key={square.id}
            onClick={() => handleSelect(square.id)}
            className="Select_colors-color"
            style={styleSelect(square.id, square.color)}
          ></div>
        ))}
      </section>
      <Link to="/feed" className="RegisterLink">
        <button type="button" onClick={handleSubmit}>
          Continue
        </button>
      </Link>
    </form>
  );
};

export { FormRegister };
