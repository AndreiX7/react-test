import React, { Component } from 'react';

class App extends Component {
  state = {
    name: 'Old'
  }

  handleClick = () => {
    this.setState({
      name: 'New'
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center', fontSize: 64 }}>
        {this.state.name}
        <br />
        <button onClick={this.handleClick}>
          THIS IS A BUTTON
        </button>
      </div>
    );
  }
}

export default App;