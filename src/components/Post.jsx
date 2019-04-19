import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  let postStyles = {
    backgroundColor: '#eee',
    fontFamily: 'sans-serif',
    paddingTop: '25x',
    transition: '.3s linear',
    margin: '10px 0px',
    padding: '0px 10px',
    borderBottom: '1px solid grey'
  };
  return (
    <div style={postStyles} className='hover-shadow' data-aos='fade-in'>
      <h3>{props.title} - {props.author}</h3>
      <p><em>{props.details}</em></p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  details: PropTypes.string
};

export default Post;
