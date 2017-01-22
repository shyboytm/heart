import React, { Component } from 'react';

class DropCap extends Component {
  render() {

    const { children } = this.props;

    return (
      <span className="fl nt3 relative tc pr3 top--1 black b f-headline-ns">
        {children}
      </span>
    );
  }
}

export default DropCap;
