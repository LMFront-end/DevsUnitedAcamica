import React, { useContext, useState } from "react";
import "./styles/TweetArea.scss";
import { usePostTweet } from "../hooks/db/usePostTweet";
import { AppContext } from "../context/AppContext";
const TweetArea = () => {
  const {
    userData: { photo },
  } = useContext(AppContext);
  const [content, setContent] = useState("");
  const handlePostTweet = usePostTweet(content);
  return (
    <section className="TweetArea">
      <picture>
        <img src={photo} alt="" />
      </picture>
      <div className="Container_tweet-area">
        <textarea
          value={content}
          placeholder="Whats happening"
          maxLength={200}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handlePostTweet();
              setContent("");
            }
          }}
        ></textarea>
        <div style={{ width: `${content.length / 2}%` }}></div>
      </div>
      <div className="TweetInfo">
        <p className="Tweet_characteres">{content.length}</p>
        <p className="Tweet_maxlength">200 max.</p>
      </div>
      <button
        onClick={() => {
          handlePostTweet();
          setContent("");
        }}
      >
        POST
      </button>
    </section>
  );
};

export { TweetArea };
