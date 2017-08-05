import React, { Component } from 'react';

class Image extends Component {
  render() {

    const { imgSrc, imgAlt } = this.props;

    return (
      <div className="w-100 center mv4">
        <img className="br2 shadow-custom" src={imgSrc} alt={imgAlt} />
      </div>
    );
  }
}

export default Image;
