import React, { Component } from 'react';

class Footer extends Component {
  render() {

    const blackLogo = require('../../img/roc-logo.png');
    const gengar    = require('../../img/gengar.gif');

    return (
      <div id="Footer" className="flex-l db items-center justify-between-l tc pa4 bt b--black-05">
        <h1 className="flex-l db f4 ttu fw9 tracked mv0-ns mb3">The Rate of Change</h1>
        <div className="flex-l db tc mv0-l mv3">
          <a href="http://cortes.us" title="Website" target="_blank" className="f6 dib ph2 link blue b hover-light-blue">Website</a>
          <a href="http://eepurl.com/cgT2bD" title="Subscribe" target="_blank" className="f6 dib ph2 link blue b hover-light-blue">Subscribe</a>
          <a href="mailto:hi@cortes.us?subject=Sponsoring The Rate of Change" title="Sponsor" target="_blank" className="f6 dib ph2 link blue b hover-light-blue">Sponsor</a>
          <a href="mailto:hi@cortes.us" title="Contact" target="_blank" className="f6 dib ph2 link blue b hover-light-blue">Contact</a>
        </div>
        <small className="flex-l db f7 mv0-l mv4 black-20">© 2017<b className="pl1">Dennis Cortés</b></small>
        <img className="flex-l db center w2" src={gengar} />
      </div>
    );
  }
}

export default Footer;
