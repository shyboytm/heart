import React, { Component } from 'react';
import { Link } from 'react-router';

import H from '../type-elements/H';
import P from '../type-elements/P';

class HomeFeedItem extends Component {
  render() {
    return (
      <Link to="/" className="db pointer link mb4">
        <hr className="b--black-05 mb3" />
        <div className="forward">
          <H size={1} color="black">People are More than Connections</H>
          <span className="blue pr3">Volume 13</span>
          <span className="black-50">Published Dec 8 2016</span>
        </div>
      </Link>
    );
  }
}

export default HomeFeedItem;
