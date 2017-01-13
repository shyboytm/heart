import React, { Component } from 'react';

class P extends Component {
  render() {

    const { children } = this.props;

    return (
      <p className="mv4 lh-paragraph black-70 fw4 f4 leitura">
        {children}
      </p>
    );
  }
}

export default P;
