import React, { Component } from 'react';

class GalleryThree extends Component {
  render() {

    const {
      imgOne,
      imgTwo,
      imgThree } = this.props;

    return (
      <div className="w-100 cf">
        <div className="fl w-33-l w-100 dib ph2 pb3">
          <img src={imgOne} alt="The Rate of Change Content" />
        </div>
        <div className="fl w-33-l w-100 dib ph2 pb3">
          <img src={imgTwo} alt="The Rate of Change Content" />
        </div>
        <div className="fl w-33-l w-100 dib ph2 pb3">
          <img src={imgThree} alt="The Rate of Change Content" />
        </div>
      </div>
    );
  }
}

export default GalleryThree;
