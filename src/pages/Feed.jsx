import { useContext, useEffect } from "react";
import { HeaderFeed } from "../components/HeaderFeed";
import { TweetArea } from "../components/TweetArea";
import { Tweets } from "../containers/Tweets";
import { AppContext } from "../context/AppContext";
import { useGetTweets } from "../hooks/db/useGetTweets";
import "./styles/Feed.scss";

const Feed = () => {
  const { getUserDataFromDb } = useContext(AppContext);
  const tweets = useGetTweets();

  useEffect(() => {
    getUserDataFromDb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="Feed">
      <HeaderFeed />
      <TweetArea />
      <Tweets tweets={tweets} />
    </section>
  );
};

export { Feed };
