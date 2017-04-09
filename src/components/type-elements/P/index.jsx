import React, { Component } from 'react';

class P extends Component {
  render() {

    const { children } = this.props;

    return (
      <p className="mv4 lh-paragraph black-70 f4-ns f5">
        {children}
      </p>
    );
  }
}

export default P;
