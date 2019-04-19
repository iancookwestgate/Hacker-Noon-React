import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';
import mIcon from '../assets/images/m-icon.png';
import hNoon from '../assets/images/hnoon-home.png';
import twitter from '../assets/images/twitter.png';
import fbook from '../assets/images/fbook.png';

function Navbar(){
  return (
    <div className='bg-grn'>
      <div className='navbar'>
        <div className='topbar'>
          <img id="m-icon" src={mIcon}></img>
          <div className="rowify">
            <Link id="sign-in" to="/">Sign in</Link>
            <Link id="curve-border" to="/">Get started</Link>
          </div>
        </div>
        <div className='secondary-bar'>
          <div className="imgManip">
            <img id="logo" src={hNoon}></img>
          </div>
          <div className="split">
            <div className="leftside">
              <Link to="/">LATEST</Link>
              <Link to="/">EDITOR'S CHOICE</Link>
              <Link to="/">JOIN COMMUNITY</Link>
            </div>
            <div className="icons">
              <img src={twitter}></img>
              <img src={fbook}></img>
              <Link to="/">Follow</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
