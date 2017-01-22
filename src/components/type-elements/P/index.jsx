import React, { Component } from 'react';

class P extends Component {
  render() {

    const { children } = this.props;

    return (
      <p className="mv3 lh-paragraph black-70 f5">
        {children}
      </p>
    );
  }
}

export default P;
