import React from "react";
import userImg from './img/user.png'

function User() {
  return (
    <>
      <div className="user-image">
        <img src={userImg} alt="user photo" width={85}/>
      </div>
    </>
  );
}

function UserAbout() {
  return (
    <>
      <div className="user-about">
        <h3>username</h3>
        <h6>userAbout</h6>
      </div>
    </>

  )
}

export { User, UserAbout };
