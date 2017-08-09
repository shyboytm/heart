import React, { Component } from 'react';
import { Link } from 'react-router';

import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';

class PostEnd extends Component {
  render() {

    const dennisCortes = require('../../../img/dennis-cortes.jpg');

    return (
      <div id="PostEnd" className="mt5">
        <P className="mt4 mb0 db f5 black-70">Thanks for reading, <b className="db f5 black">Dennis Cortés</b></P>
        <div className="flex items-center">
          <img src={dennisCortes} className="w3 h3 br-pill bg-black-05 shadow-custom mr3" />
          <span className="f2">✌️</span>
        </div>
        <LineBreak />
        <div className="tc center">
          <a className="mt4 f6 link hover-bg-light-red br2 ph3 pv2 mb2 dib white bg-red mr3-ns" href="http://eepurl.com/cgT2bD">Subscribe to Newsletter</a>
          <Link className="mt4 f6 link hover-bg-light-blue br2 ph3 pv2 mb2 dib white bg-blue" to="/">Read More Articles</Link>
        </div>
        <P><em>I’d love for you to follow the blog on <L hrefLink="https://medium.com/the-rate-of-change">Medium</L> or join my <L hrefLink="http://eepurl.com/cgT2bD">personal newsletter</L>. Feel free to reach out to me on <L hrefLink="https://twitter.com/fromcortes">Twitter</L> if you have any feedback, questions, or just to say hello!</em><br/></P>
      </div>
    );
  }
}

export default PostEnd;
