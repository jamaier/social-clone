import React from "react";
import Friend from "./Friend";
import "./../App.css";

const Friends = [
  {
    name: "Jake",
    headline: "headline",
  },
  {
    name: "Chris",
    headline: "headline",
  },
  {
    name: "Aaron",
    headline: "headline",
  },
];

function FriendList() {
  return (
    <>
      <div>
        {Friends.map((friend, index) => (
          <Friend name={friend.name} headline={friend.headline} key={index} />
        ))}
      </div>
    </>
  );
}

export default FriendList;
