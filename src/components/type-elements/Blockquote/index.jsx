import React, { Component } from 'react';

class Blockquote extends Component {
  render() {

    const { children } = this.props;

    return (
      <blockquote className="mt3 mb5 lh-copy black f3 tl mh4-ns mh2 fw4">
        <span className="f1 black-10 mb0 nb3 db i">"<br /></span>
        {children}
      </blockquote>
    );
  }
}

export default Blockquote;
