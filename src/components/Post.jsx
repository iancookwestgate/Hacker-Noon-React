import React from 'react';
import PropTypes from 'prop-types';
import '../scss/styles.scss';

function Post(props){

  return (
    <div data-aos='fade-in'>
      <div>
        <div className="spacing">
          <img className="spread" src={props.img}></img>
          <h2 className="arranged">{props.title}</h2>
          <p className="arranged">{props.description}</p>
          <div className="bottom">
            <img className="insta" src={props.profile}></img>
            <div className="sort">
              <a href="#">{props.name}</a>
              <br></br>
              <span id="date-details">{props.dateRead}</span>
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
