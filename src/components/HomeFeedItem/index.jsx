import React, { Component } from 'react';
import { Link } from 'react-router';

import H from '../type-elements/H';

class HomeFeedItem extends Component {
  render() {

    const {
      postTitle,
      volumeNumber,
      publishedDate,
      postLink
    } = this.props

    return (
      <Link to={postLink} className="db pointer black link hover-black-40 mb4">
        <hr className="b--black-05 mb3" />
        <div className="forward">
          <H size={1} color="link">{postTitle}</H>
          <span className="black-30 b pr3">Vol. {volumeNumber}</span>
          <span className="black-60">Published {publishedDate}</span>
        </div>
      </Link>
    );
  }
}

export default HomeFeedItem;
