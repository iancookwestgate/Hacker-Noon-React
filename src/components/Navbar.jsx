import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';
import mIcon from '../assets/images/m-icon.png';

function Navbar(){
  return (
    <div className='bg-grn navbar'>
      <img id="m-icon" src={mIcon}></img>
      <div className="rowify">
        <Link to="/">Sign in</Link>
        <Link id="curve-border" to="/">Get started</Link>
      </div>
    </div>
  );
}

export default Navbar;
