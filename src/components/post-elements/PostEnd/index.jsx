import React, { Component } from 'react';

import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';

class PostEnd extends Component {
  render() {
    return (
      <div id="PostEnd" className="mt5">
        <span className="mt4 mb0 db f4 black-70 tc">Thanks for reading!</span><br/>
        <b className="db f4 black tc">— Dennis Cortés</b><br/>
        <LineBreak />
        <div className="tc center">
          <a className="mt4 f6 link hover-bg-light-red br3 ph3 pv2 mb2 dib white bg-red" href="http://eepurl.com/cgT2bD">Subscribe to Newsletter</a>
        </div>
        <P><em>I’d love for you to follow the blog on <L hrefLink="https://medium.com/the-rate-of-change">Medium</L> or join my personal newsletter. Feel free to reach out to me on <L hrefLink="https://twitter.com/fromcortes">Twitter</L> if you have any feedback, questions, or just to say hello!</em><br/>

        </P>
      </div>
    );
  }
}

export default PostEnd;
