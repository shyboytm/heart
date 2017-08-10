import React, { Component } from 'react';

class L extends Component {
  render() {

    const { children, hrefLink } = this.props;

    return (
      <a href={hrefLink} target="_blank" rel="nofollow" className="no-outline link bb b--black-10 sans-serif dib blue hover-light-blue fw5">
        {children}
      </a>
    );
  }
}

export default L;
