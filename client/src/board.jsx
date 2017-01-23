import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerTurn: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    console.log(this);
    this.setState({
      playerTurn: !this.state.playerTurn
    });
  }

  render() {
    return (
      <div>
        <style>{`
          table {
            border:1px solid black;
          }
        `}</style>
        <h1>It is {this.state.playerTurn ? 'O' : 'X'}'s turn</h1>
        <table>
          <tbody>
            <tr>
              <td><button onClick={this.handleButtonClick}> </button></td>
              <td><button onClick={this.handleButtonClick}> </button></td>
              <td><button onClick={this.handleButtonClick}> </button></td>
            </tr>
            <tr>
              <td><button onClick={this.handleButtonClick}> </button></td>
              <td><button onClick={this.handleButtonClick}> </button></td>
              <td><button onClick={this.handleButtonClick}> </button></td>
            </tr>
            <tr>
              <td><button onClick={this.handleButtonClick}> </button></td>
              <td><button onClick={this.handleButtonClick}> </button></td>
              <td><button onClick={this.handleButtonClick}> </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Board;