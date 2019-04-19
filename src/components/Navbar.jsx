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
            <Link to ="/"><img id="logo" src={hNoon}></img></Link>
          </div>
          <div className="split">
            <div className="leftside">
              <a href="#">LATEST</a>
              <a href="#">TOP</a>
              <a href="#">2.0</a>
              <a id="bord-right" href="#">PODCAST</a>
              <a href="#">GET PUBLISHED</a>
            </div>
            <div className="icons">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/search.png"></img>
              <img src={twitter}></img>
              <img src={fbook}></img>
              <a href="#">Follow</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
