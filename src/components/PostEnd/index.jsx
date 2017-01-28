import React, { Component } from 'react';

import L from '../type-elements/L';
import LineBreak from '../type-elements/LineBreak';
import P from '../type-elements/P';

class PostEnd extends Component {
  render() {
    return (
      <div id="PostEnd" className="mt5">
        <LineBreak />
        <P><em>I’d love for you to follow the blog on <L hrefLink="https://medium.com/the-rate-of-change">Medium</L> or join my personal newsletter. Feel free to reach out to me on <L hrefLink="https://twitter.com/fromcortes">Twitter</L> if you have any feedback, questions, or just to say hello!</em><br/>
          <span className="mt4 mb0 db">Thanks for reading!</span><br/>
          <b className="db black">— Dennis Cortés</b><br/>
        </P>
      </div>
    );
  }
}

export default PostEnd;
