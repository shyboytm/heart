import React, { Component } from 'react';

class GalleryThree extends Component {
  render() {

    const {
      imgOne,
      imgTwo,
      imgThree } = this.props;

    return (
      <div className="w-100 cf">
        <div className="fl w-33-ns w-100 dib ph2 pb3">
          <img src={imgOne} />
        </div>
        <div className="fl w-33-ns w-100 dib ph2 pb3">
          <img src={imgTwo} />
        </div>
        <div className="fl w-33-ns w-100 dib ph2 pb3">
          <img src={imgThree} />
        </div>
      </div>
    );
  }
}

export default GalleryThree;
