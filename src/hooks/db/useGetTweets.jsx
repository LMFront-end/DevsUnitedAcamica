import { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { app } from "../../firebaseConfig";

const useGetTweets = () => {
  const db = getFirestore(app);
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "/tweets"), (docs) => {
      const res = [];
      docs.forEach((doc) => {
        res.push(doc.data());
      });
      setTweets(res);
    });
  }, []);
  return tweets;
};

export { useGetTweets };
