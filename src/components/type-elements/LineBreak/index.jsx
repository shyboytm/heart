import React, { Component } from 'react';

class LineBreak extends Component {
  render() {

    const { children, hrefLink } = this.props;

    return (
      <span href={hrefLink} className="tc f1 black-20 db ">
        . . .
      </span>
    );
  }
}

export default LineBreak;
