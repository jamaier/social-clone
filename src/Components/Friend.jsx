import React from "react";
import PropTypes from "prop-types";
import "./../App.css";

function Friend(props) {
  return (
    <>
      <div className="friend">
        <h4>{props.name}:</h4>
        <p>{props.headline}</p>
        <hr />
        <button>Add Friend</button>
      </div>
    </>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  headline: PropTypes.string,
};

export default Friend;
