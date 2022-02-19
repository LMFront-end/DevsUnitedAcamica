import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderProfile } from "../components/HeaderProfile";
import { ProfileCard } from "../components/ProfileCard";
import { Tweets } from "../containers/Tweets";
import { AppContext } from "../context/AppContext";
import { useGetTweets } from "../hooks/db/useGetTweets";
import "./styles/Profile.scss";
const Profile = () => {
  const {
    userData: { uid },
  } = useContext(AppContext);
  const tweets = useGetTweets();
  const posts = tweets.filter((post) => post.uid === uid);
  const favorites = tweets.filter((favorite) => favorite.likes.includes(uid));
  return (
    <section className="Profile">
      <HeaderProfile />
      <ProfileCard />
      <Routes>
        <Route path="/posts" element={<Tweets tweets={posts} />} />
        <Route path="/favorites" element={<Tweets tweets={favorites} />} />
      </Routes>
    </section>
  );
};

export { Profile };
