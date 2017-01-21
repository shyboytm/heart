import React, { Component } from 'react';

class Image extends Component {
  render() {

    const { imgSrc, imgAlt } = this.props;

    return (
      <div className="mt3 mb5 lh-copy black b f3 tc mh4-ns mh2">
        <img src={imgSrc} alt={imgAlt} />
      </div>
    );
  }
}

export default Image;
