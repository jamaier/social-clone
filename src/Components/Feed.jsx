import React from "react";
import Tweet from "./Tweet";
import './../App.css'


const TweetList = [
  {
  userName: 'Jake',
  tweet: "This is a tweet",
  },
  {
  userName: 'Chris',
  tweet: "This is another tweet",
  }
]

function Feed() {
    return (
      <>
        <div className='feed'>
          {TweetList.map((tweet, index) =>
            <Tweet 
            userName = {tweet.userName}
            tweet = {tweet.tweet}
            key = {index}/>
          )}
        </div>  
      </>
    );
  }

  export default Feed;

