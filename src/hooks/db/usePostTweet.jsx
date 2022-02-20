import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { app } from "../../firebaseConfig";

const usePostTweet = (body) => {
  const db = getFirestore(app);
  const reference = doc(collection(db, "tweets"));
  const {
    userData: { username, color, uid, photo },
  } = useContext(AppContext);
  const tweetPost = {
    body: body,
    color: color,
    date: new Date().toDateString().slice(4, 10),
    id: reference.id,
    uid: uid,
    likes: [],
    username: username,
    photo: photo,
  };
  const onClick = async () => {
    if (body.length === 0) return;
    await setDoc(reference, tweetPost);
  };

  return onClick;
};

export { usePostTweet };
