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

      // Type Color
      'blue':    color === 'blue',
      'black':   color === 'black',
    });

    if (size === 2 ) {
      var classes = ({'mt4 nb3 pt3 tracked-custom': true});
    }

    if (size === 4) {
      var classes = ({'tracked ttu': true});
    }

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
