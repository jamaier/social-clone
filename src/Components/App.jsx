import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import FriendList from "./FriendList";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="content-container">
          <div className="sidebar">
            <Sidebar />
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
