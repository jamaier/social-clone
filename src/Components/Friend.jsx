import React from "react";
import './../App.css'

function Friend() {
    return (
      <>
        <div className='friend'>
          {/* <img src={friendAvatar} alt="this is a friend image" /> */}
          <div className='friend-img'>this is a person</div>
          <p>my-name</p>
          <button>please like me</button>
        </div>
      </>
    );
  }
  
  export default Friend;