import React, { Component } from 'react';

class GroceriesDisplay extends Component {
  render() { 
    const { data } = this.props;
    
    return (
      <div style={{ margin: 16, fontSize: 24 }}>
        {data.map((d, index) => {
          return (
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 32 }}>
              <div>Product: <b>{d.product}</b></div>
              <div>Price: <b>Php {d.price}</b></div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default GroceriesDisplay;