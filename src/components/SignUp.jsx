import React from 'react';
import computer from '../assets/images/hacker-comp.png';
import '../scss/styles.scss';

function SignUp(){
  return (
    <div className="bg-grn signUp">
      <img id="compu" src={computer}></img>
      <h1>Here is the SignUp Component!</h1>
    </div>
  );
}

export default SignUp;
