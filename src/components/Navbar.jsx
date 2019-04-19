import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';
import mIcon from '../assets/images/m-icon.png';

function Navbar(){
  return (
    <div className='bg-grn navbar'>
      <img src={mIcon}></img>
      <h1>Help Queue!</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;
