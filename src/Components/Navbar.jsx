import React from "react";

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <button>Home</button>
        <button>Notifications</button>
        <button>Messages</button>
        <input type="text" name="search" id="search-bar" />
        <button>Tweet</button>
      </div>
    </>
  );
}

export default Navbar;