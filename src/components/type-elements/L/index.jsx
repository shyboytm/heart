import React, { Component } from 'react';

class L extends Component {
  render() {

    const { children } = this.props;

    return (
      <a className="mv4 lh-paragraph black-70 fw4 f4-ns f5 leitura">
        {children}
      </a>
    );
  }
}

export default L;
