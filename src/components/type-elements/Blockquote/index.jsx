import React, { Component } from 'react';

class Blockquote extends Component {
  render() {

    const { children } = this.props;

    return (
      <blockquote className="mt3 mb5 lh-copy black b f3 tc mh2">
        <span className="f1 black-10 mb0">"<br /></span>
        {children}
      </blockquote>
    );
  }
}

export default Blockquote;
