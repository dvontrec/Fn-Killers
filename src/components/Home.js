import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav';
class Home extends Component {
  getData() {
    alert('Data');
  }
  render() {
    return (
      <div>
        <button onClick={this.getData}>Button</button>
      </div>
    );
  }
}

export default Home;
