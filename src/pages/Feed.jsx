import { HeaderFeed } from "../components/HeaderFeed";
import { TweetArea } from "../components/TweetArea";
import { Tweets } from "../containers/Tweets";
import "./styles/Feed.scss";

const Feed = () => {
  return (
    <section className="Feed">
      <HeaderFeed />
      <TweetArea />
      <Tweets />
    </section>
  );
};

export { Feed };
