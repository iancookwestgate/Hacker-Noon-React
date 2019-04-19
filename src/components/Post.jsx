import React from 'react';
import PropTypes from 'prop-types';
import '../scss/styles.scss';

function Post(props){

  return (
    <div className="stories" data-aos='fade-in'>
      <div>
        <div className="spacing">
          <img className="spread" src={props.img}></img>
          <h2 className="arranged">{props.title}</h2>
          <p className="arranged">{props.description}</p>
          <div className="bottom">
            <img className="insta" src={props.profile}></img>
            <div className="sort">
              <a href="#">{props.name}</a>
              <p id="date-details">{props.dateRead}</p>
            </div>
          </div>
        </div>
      </div>
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
