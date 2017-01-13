import React, { Component } from 'react';

class Blockquote extends Component {
  render() {

    const { children } = this.props;

    return (
      <blockquote className="mv5 lh-copy black-50 fw4 f3 i ml0 pl4">
        {children}
      </blockquote>
    );
  }
}

export default Blockquote;
