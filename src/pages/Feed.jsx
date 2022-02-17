import { useContext, useEffect } from "react";
import { HeaderFeed } from "../components/HeaderFeed";
import { TweetArea } from "../components/TweetArea";
import { Tweets } from "../containers/Tweets";
import { AppContext } from "../context/AppContext";
import "./styles/Feed.scss";

const Feed = () => {
  const { userData, getUserDataFromDb } = useContext(AppContext);
  useEffect(() => {
    getUserDataFromDb();
  }, []);

  return (
    <section className="Feed">
      {console.log(userData)}
      <HeaderFeed />
      <TweetArea />
      <Tweets />
    </section>
  );
};

export { Feed };
