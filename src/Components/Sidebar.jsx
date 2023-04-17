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
    <>
      <div class='friend'>
        {/* <img src={friendAvatar} alt="this is a friend image" /> */}
        <div class='friend-img'>this is a person</div>
        <p>my-name</p>
        <button>please like me</button>
      </div>
    </>
  );
}

export default Sidebar;
