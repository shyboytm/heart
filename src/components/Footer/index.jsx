import React, { Component } from 'react';

class Footer extends Component {
  render() {

    const blackLogo = require('../../img/roc-logo.png');
    const zorua     = require('../../img/zorua.gif');

    return (
      <div id="Footer" className="pv2 mt4 center tc">
        <img src={blackLogo} alt="Rate of Change Logo" className="db h3 center mb3 tc"/>
        <div className="tc mt3 mb4">
          <a href="http://cortes.us" title="Website" className="f6 dib ph2 link blue b hover-light-blue">Website</a>
          <a href="#" title="Subscribe" className="f6 dib ph2 link blue b hover-light-blue">Subscribe</a>
          <a href="#" title="Sponsor" className="f6 dib ph2 link blue b hover-light-blue">Sponsor</a>
          <a href="#" title="Contact" className="f6 dib ph2 link blue b hover-light-blue">Contact</a>
        </div>
        <small className="f6 db tc f7 black-20">© 2017 <b>Dennis Cortés</b>, All Rights Reserved</small>
        <img className="w2 mt4" src={zorua} />
      </div>
    );
  }
}

export default Footer;
