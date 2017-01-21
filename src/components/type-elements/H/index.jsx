import React, { Component } from 'react';
import classNames from 'classnames';

const  SIZE_TO_ELEMENT_MAP = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
};

function chooseHeaderTag(size) {
  return SIZE_TO_ELEMENT_MAP[size] || 'h3';
}

class Header extends Component {
  render() {
    const {
      size,
      color,
      tt,
      children
    } = this.props;

    var classes = ({
      // Defaults
      'lh-copy': true,

      // Type Alignment
      'ttu tracked': tt === 'u',

      // Type Color
      'blue':        color === 'blue',
      'red':         color === 'red',
      'green':       color === 'green',
      'orange':      color === 'orange',
      'white':       color === 'white',
      'light-gray':  color === 'light-gray',
      'black':       color === 'black',
    });

    this.headerTag = chooseHeaderTag(size);
    return (
      <this.headerTag
          className={classNames(classes)}>
        {children}
      </this.headerTag>
    );
  }
}

export default Header;
