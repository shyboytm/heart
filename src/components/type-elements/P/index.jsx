import React, { Component } from 'react';

class P extends Component {
  render() {

    const { children } = this.props;

    return (
      <p className="lh-copy black-70 fw4 leitura">
        {children}
      </p>
    );
  }
}

export default P;
