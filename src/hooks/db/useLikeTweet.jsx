import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "../../firebaseConfig";

const useLikeUser = (id, uid, currentLikes) => {
  const db = getFirestore(app);
  const tweetRef = doc(db, "tweets", id);
  const isCurrentUserLike = currentLikes.includes(uid);
  const newLikesWithUser = [...currentLikes, uid];
  const newLikesWithoutUser = currentLikes.filter((likes) => likes !== uid);

  const updateLikes = async () => {
    if (isCurrentUserLike) {
      await updateDoc(tweetRef, { likes: newLikesWithoutUser });
    } else {
      await updateDoc(tweetRef, { likes: newLikesWithUser });
    }
  };

  return updateLikes;
};

export { useLikeUser };
