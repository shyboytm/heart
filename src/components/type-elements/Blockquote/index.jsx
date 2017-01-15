import React, { Component } from 'react';

class Blockquote extends Component {
  render() {

    const { children } = this.props;

    return (
      <blockquote className="mv5 lh-copy black b f3 leitura mh0">
        {children}
      </blockquote>
    );
  }
}

export default Blockquote;
