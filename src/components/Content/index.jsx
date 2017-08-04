import React, { Component } from 'react';

import H from '../type-elements/H';

class Content extends Component {
  render() {
    return (
      <div className="flex-l w-80-ns w-90 center pv5-ns pv4">
        <div className="flex-auto-l db w-auto-l w-100 pr5-l">
          {this.props.children}
        </div>
        <div className="flex-l db w-auto-l w-100 pl5-l">
          <div className="flex br2 ph4 pv3 ba b--black-05">
            <H size={3}>The Rate of Change</H>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
