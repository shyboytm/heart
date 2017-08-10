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
      <Link to={postLink} className="db pointer black link hover-black-40 bb b--black-05 pv4 no-outline">
        <div className="forward">
          <h2 className="fw6 f3 lh-copy mt0">{postTitle}</h2>
          <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Vol. {volumeNumber}</span>
          <span className="black-60">Published {publishedDate}</span>
        </div>
      </Link>
    );
  }
}

export default HomeFeedItem;
