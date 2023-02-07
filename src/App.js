import React, { Component } from 'react';
import GroceriesDisplay from './GroceriesDisplay';
class App extends Component {
  state = {
    groceries: [
      {
        product: "Apple",
        price: 10
      },
      {
        product: "Banana",
        price: 14
      },
      {
        product: "Pineapple",
        price: 25
      }
    ]
  }
  
  render() {
    return (
      <div>
        <GroceriesDisplay data={this.state.groceries} />
      </div>
    );
  }
}

export default App;

/* Task:
  Create an array of grocery data in state, send data from 1 component to another and display it
*/