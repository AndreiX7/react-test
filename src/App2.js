import React, { Component } from 'react';

class App extends Component {
  state = [
    {
      objName: 'Testing object 1',
      id: 1
    },
    {
      objName: 'Testing object 2',
      id: 2
    },
    {
      objName: 'Testing object 3',
      id: 3
    }
  ]
  render() {
    
    return (
      <div style={{ textAlign: 'center', fontSize: 64 }}>
        {this.state.map((data, index) => {
          return (
            <div>
              {data.name}
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;