import React from "react";

function Navbar() {
  return (
    <React.Fragment>
      <button>Home</button>
      <button>Notifications</button>
      <button>Messages</button>
      <input type="text" name="search" id="search-bar" />
      <button>Tweet</button>
    </React.Fragment>
  );
}

export default Navbar