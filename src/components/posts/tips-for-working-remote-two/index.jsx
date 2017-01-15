import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from '../../Header';
import Footer from '../../Footer';

import Blockquote from '../../type-elements/Blockquote';
import DropCap from '../../type-elements/DropCap';
import H from '../../type-elements/H';
import L from '../../type-elements/L';
import P from '../../type-elements/P';

class Eighteen extends Component {
  render() {

    const imgTipsForWorkingRemoteTwo = require('../../../img/roc-volume-18-cover.png');

    return (
      <div className="">
        <Header />
        <div id="18" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">
          <img src={imgTipsForWorkingRemoteTwo} alt="Tips for Working Remote 2" />
          <div className="mb5 tc">
            <H size={1}>Tips for Working Remote Part 2</H>
            <span className="blue pr3">Volume 18</span>
            <span className="black-50">Published Jan 12 2017</span>
          </div>
          <P><DropCap>L</DropCap>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
          <Blockquote>
            Love how clean it is, but it feels like a
            tech start-up website as opposed to your go-to source
            for design/lettering inspiration.
          </Blockquote>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <L hrefLink="http://cortes.us">tempor incididunt</L> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Eighteen;
