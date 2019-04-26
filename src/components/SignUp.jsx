import React from 'react';
import computer from '../assets/images/hacker-comp.png';
import '../scss/styles.scss';

function SignUp(){
  return (
    <div className="bg-grn signUp">
      <img id="compu" src={computer}></img>
      <div className="signup-sep">
        <a href="#" id="newsletter" type="submit">Signup for the Hacker Noon Newsletter</a>
      </div>
    </div>
  );
}

export default SignUp;
