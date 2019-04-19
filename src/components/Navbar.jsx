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
        <img id="m-icon" src={mIcon}></img>
        <div className="rowify">
          <Link to="/">Sign in</Link>
          <Link id="curve-border" to="/">Get started</Link>
        </div>
      </div>
      <div className='secondary-bar'>
        <img id="logo" src={hNoon}></img>
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
  );
}

export default Navbar;
