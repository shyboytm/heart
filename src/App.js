import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App no-outline">
        {this.props.children}
      </div>
    );
  }
}

export default App;
