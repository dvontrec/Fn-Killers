import React, { Component } from 'react';
import { Route, HashRouter, IndexRoute } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
