import React from "react";
import PropTypes from "prop-types";

function Tweet(props) {
  return (
    <>
      <div className='tweet'>
        <h4>{props.userName}</h4>
        <p>{props.tweet}</p>
      </div>  
    </>
  );
}

Tweet.propTypes = {
  userName: PropTypes.string,
  tweet: PropTypes.string
};

export default Tweet;
