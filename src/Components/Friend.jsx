import React from "react";
import PropTypes from "prop-types";
import "./../App.css";

function Friend(props) {
  return (
    <>
      <div className="friend">
        <div className="friend-name">
          <h4>{props.name}:</h4>
        </div>
        <div className="friend-button">
          <p>{props.headline}</p>
          <button>Add Friend</button>
        </div>
      </div>
      <hr />
    </>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  headline: PropTypes.string,
};

export default Friend;
