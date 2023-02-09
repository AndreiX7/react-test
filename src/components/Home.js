import React, { Component } from 'react';
import axios from '../services/axios';


class Home extends Component {
  state = {
    data: []
  }
  componentDidMount = async () => {
    const response = await axios.get("/stats");
    this.setState({data: response.data})
  }
  render() {
    return (
      <div style={{ margin: 16 }}>
        {this.state.data.map((data) => {
          return (
            <div>
              <p>Source: {data.src}</p>
              <p>Destination: {data.dest}</p>
              <p>Latency: {data.latency}ms</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Home;