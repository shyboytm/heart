import React, { Component } from 'react';

class Footer extends Component {
  render() {

    const blackLogo =     require('../../img/roc-logo.png');

    return (
      <div id="Footer" className="pv3 mt4 black-30">
        <img src={blackLogo} alt="Rate of Change Logo" className="db h3 center mb3 tc"/>
        <small className="f6 db tc">© 2017 <b>Dennis Cortés</b>, All Rights Reserved</small>
        <div className="tc mt3">
          <a href="#" title="Subscribe" className="f6 dib ph2 link blue b hover-light-blue">Subscribe</a>
          <a href="#" title="Sponsor" className="f6 dib ph2 link blue b hover-light-blue">Sponsor</a>
          <a href="#" title="Contact" className="f6 dib ph2 link blue b hover-light-blue">Contact</a>
        </div>
      </div>
    );
  }
}

export default Footer;
