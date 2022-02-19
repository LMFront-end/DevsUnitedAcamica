import "./styles/SweetAlert.scss";
import Alert from "../assets/alert.svg";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { app } from "../firebaseConfig";

const SweetAlert = ({ handleClose, id }) => {
  const db = getFirestore(app);
  const handleDelete = async () => {
    await deleteDoc(doc(db, "tweets", id));
  };
  return (
    <section className="ContainerSweetAlert">
      <div className="SweetAlert_box">
        <picture>
          <img src={Alert} alt="img" />
        </picture>
        <h2>Are you sure ?</h2>
        <p>You won't be able to revert this!</p>
        <div className="SweetAlert_buttons">
          <button className="Delete" onClick={handleDelete}>
            Yes, delete it!
          </button>
          <button className="Cancel" onClick={() => handleClose(false)}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export { SweetAlert };
