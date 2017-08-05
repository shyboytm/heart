import React, { Component } from 'react';

import P from '../type-elements/P';

class Content extends Component {
  render() {
    return (
      <div id={this.props.id} className="flex-l w-80-ns w-90 center pv5-ns pv3">
        <div className="flex-auto-l flex-basis db w-100 pr4-l">
          {this.props.children}
        </div>
        <div className="flex-auto-l w-100 pl4-l pt4">
          <div className="flex-auto br2 pa3 ba b--black-05 f6">
            <p className="lh-copy mt0">
              The Rate of Change is a weekly blog about Design, Development, Business, and Life
              written by <a href="https://cortes.us" className="link blue dim">Dennis Cortés</a>.
            </p>
            <a className="f7 link bg-animate hover-bg-light-blue br2 pa2 dib white bg-blue" href="https://twitter.com/fromcortes">
              Follow @fromcortes
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
