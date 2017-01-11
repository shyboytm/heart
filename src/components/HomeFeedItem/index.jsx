import React, { Component } from 'react';
import { Link } from 'react-router';

import H from '../type-elements/H';
import P from '../type-elements/P';

class HomeFeedItem extends Component {
  render() {
    return (
      <Link to="/" className="link">
        <H size={1} color="black">This is an Example Title</H>
        <span className="black-50">January 10th, 2017</span>
      </Link>
    );
  }
}

export default HomeFeedItem;
