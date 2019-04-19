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
      <img src={props.img}></img>
      <h3>{props.title}</h3>
      <img src={props.profile}></img>
      <p>{props.name} - {props.dateRead}</p>
      <p><em>{props.description}</em></p>
    </div>
  );
}

Post.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  profile: PropTypes.string.isRequired,
  name: PropTypes.string,
  dateRead: PropTypes.string
};

export default Post;
