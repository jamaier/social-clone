import React from "react";
import { useState } from "react";
import './../App.css'
// import friendAvatar from "./img/avatar.PNG";

function Sidebar() {
  return (
    <React.Fragment>
      <Friend />
    </React.Fragment>
  );
}

function Friend() {
  return (
    <React.Fragment>
      {/* <img src={friendAvatar} alt="this is a friend image" /> */}
      <button>please like me</button>
    </React.Fragment>
  );
}

export default Sidebar;
