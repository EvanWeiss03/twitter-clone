import { Button, Avatar } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from '../data'

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = e => {
    e.preventDefault()
    db.collection('posts').add({
      displayName: 'Evan Weiss',
      username: 'evanweiss03',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
    })
    setTweetMessage('')
    setTweetImage('')
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://cdn-icons-png.flaticon.com/512/147/147142.png"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} type='submit' className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
