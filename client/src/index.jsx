import React from 'react';
import {render} from 'react-dom';
import Board from './board.jsx';

class App extends React.Component {
  render() {
    return (
      <Board />
    );
  }
}

render(<App/>, document.getElementById('app'));