import React, { Component } from 'react';
import HOC from './components/HOC';

class App extends Component {
  state = {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi suscipit praesentium enim, est omnis numquam, provident aperiam eos sequi quisquam dolorem ipsam asperiores repellat veritatis minima. Vitae tempore perspiciatis optio accusamus excepturi omnis quaerat commodi nemo incidunt porro. Tempora qui officiis mollitia eaque possimus sequi cupiditate recusandae ratione sapiente temporibus."
  }

  render() {
    return (
      <div style={{ textAlign: 'center', fontSize: 64 }}>
        {this.state.name}
      </div>
    );
  }
}

export default HOC(App);