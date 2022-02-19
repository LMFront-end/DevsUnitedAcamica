import { Tweet } from "../components/Tweet";
import "./styles/Tweets.scss";
import Nothing from "../assets/nothing.gif";

const Tweets = ({ tweets }) => {
  return (
    <section className="Tweets">
      {tweets.length === 0 && <img src={Nothing} alt="" className="Nothing" />}
      {tweets.length > 0 &&
        tweets.map((tweet) => {
          return <Tweet key={tweet.id} {...tweet} />;
        })}
    </section>
  );
};

export { Tweets };
