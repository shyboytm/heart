import React, { Component } from 'react';

class Footer extends Component {
  render() {

    const blackLogo =     require('../../img/roc-logo.png');

    return (
      <div id="Footer" className="pv4 black-30">
        <img src={blackLogo} alt="Rate of Change Logo" className="db h3 center mb3 tc"/>
        <small className="f6 db tc">© 2017 <b>Dennis Cortés</b>, All Rights Reserved</small>
        <div className="tc mt3">
          <a href="/language/" title="Language" className="f6 dib ph2 link blue b hover-light-blue">Subscribe</a>
          <a href="/terms/"    title="Terms" className="f6 dib ph2 link blue b hover-light-blue">Sponsor</a>
          <a href="/privacy/"  title="Privacy" className="f6 dib ph2 link blue b hover-light-blue">Contact</a>
        </div>
      </div>
    );
  }
}

export default Footer;
