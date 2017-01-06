import React, { Component } from 'react';
import './App.css';
import ComparableValue from './ComparableValue';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComparableValue value={3}
                         dataStyle='price_2f'/>

      </div>
    );
  }
}

export default App;
