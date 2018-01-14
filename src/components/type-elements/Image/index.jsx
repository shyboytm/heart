import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {

    const {
      caption,
      imgSrc,
      imgAlt
    } = this.props;

    return (
      <div className="w-100 center mv4">
        <img className="br2 shadow-custom" src={imgSrc} alt={imgAlt} />
        <span className="black-30 db i f6 fw6 mt2">{caption}</span>
      </div>
    );
  }
}

Image.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

export default Image;
