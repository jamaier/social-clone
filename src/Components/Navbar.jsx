import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-buttons">
          <button>Home</button>
          <button>Notifications</button>
          <button>Messages</button>
        </div>

        <div className="search-bar">
          <input type="text" name="search" id="search-bar" />
          <button>Tweet</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
