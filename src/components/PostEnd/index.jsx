import React, { Component } from 'react';
import { Link } from 'react-router';

import P from '../type-elements/P';

class PostEnd extends Component {
  render() {
    return (
      <div id="PostEnd" className="mt5">
        <P><em>I’d love for you to follow the blog here on Medium or join my personal newsletter. Feel free to reach out to me on Twitter if you have any feedback, questions, or just to say hello!</em><br/>
          <b className="mt4 mb0 db black">— Dennis Cortés</b><br/>
        </P>
      </div>
    );
  }
}

export default PostEnd;
