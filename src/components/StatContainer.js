import React, { Component } from 'react';

import Card from './Card';
class StatContainer extends Component {
  state = {
    name: 'me'
  };
  render() {
    return (
      <div className="row">
        <Card name="BossHeathen502" />
        <Card name="Lilsmokey61" />
        <Card name="Dvontrec" />
      </div>
    );
  }
}

export default StatContainer;
