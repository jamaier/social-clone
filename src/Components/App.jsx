import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import FriendList from "./FriendList";
import { User, UserAbout } from "./User";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="content-container">
          <div className="user">
            <User />
            <UserAbout />
          </div>
          <div className="feed">
            <Feed />
          </div>
          <div className="friend-list">
            <FriendList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
