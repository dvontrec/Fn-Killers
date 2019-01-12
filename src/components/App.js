import React, { Component } from 'react';
import { Route, HashRouter, IndexRoute } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
