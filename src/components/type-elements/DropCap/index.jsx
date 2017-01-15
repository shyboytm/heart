import React, { Component } from 'react';

class DropCap extends Component {
  render() {

    const { children } = this.props;

    return (
      <span className="fl lh-title relative tc pr3 top--1 black b f-headline-ns">
        {children}
      </span>
    );
  }
}

export default DropCap;
