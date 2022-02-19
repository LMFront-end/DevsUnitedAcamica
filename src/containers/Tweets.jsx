import { Tweet } from "../components/Tweet";
import { useGetTweets } from "../hooks/db/useGetTweets";
import "./styles/Tweets.scss";

const Tweets = () => {
  const tweets = useGetTweets();
  return (
    <section className="Tweets">
      {tweets.map((tweet) => {
        return <Tweet {...tweet} />;
      })}
    </section>
  );
};

export { Tweets };
