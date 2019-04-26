import React from 'react';
import computer from '../assets/images/hacker-comp.png';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function SignUp(){
  return (
    <div className="bg-grn signUp">
      <img id="compu" src={computer}></img>
      <div className="signup-sep">
        <Link to="/" id="newsletter">Signup for the Hacker Noon Newsletter</Link>
      </div>
    </div>
  );
}

export default SignUp;
