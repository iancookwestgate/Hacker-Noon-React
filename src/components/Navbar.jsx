import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';
import mIcon from '../assets/images/m-icon.png';
import hNoon from '../assets/images/hnoon-home.png';
import twitter from '../assets/images/twitter.png';
import fbook from '../assets/images/fbook.png';
import magGlass from '../assets/images/magGlass.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: true,
      stageVisibleOnPage: true
    };
    this.disappear = this.disappear.bind(this);
  }

  disappear() {
    if (this.state.stageVisibleOnPage === true) {
      this.setState({stageVisibleOnPage: false});
    } else {
      this.setState({stageVisibleOnPage: true});
    }
  }

  render() {
    return (
      <div>
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
                <img id="logo" src={hNoon} onClick={()=>this.disappear()}></img>
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
                  <img src={magGlass}></img>
                  <img src={twitter}></img>
                  <img src={fbook}></img>
                  <a id="follow" href="#">Follow</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={true===this.state.stageVisibleOnPage? "sneaky hide" : "sneaky show"}>
          <h1>Look, I finally got state to work!!!</h1>
        </div>
      </div>
    );
  }

}

export default Navbar;
