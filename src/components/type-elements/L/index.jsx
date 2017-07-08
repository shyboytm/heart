import React, { Component } from 'react';

class L extends Component {
  render() {

    const { children, hrefLink } = this.props;

    return (
      <a href={hrefLink} target="_blank" rel="nofollow" className="link bb b--black-10 sans-serif dib blue hover-light-blue fw7">
        {children}
      </a>
    );
  }
}

export default L;
