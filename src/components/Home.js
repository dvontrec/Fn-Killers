import React, { Component } from 'react';
import axios from 'axios';

import StatContainer from './StatContainer';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <StatContainer />
      </div>
    );
  }
}

export default Home;
