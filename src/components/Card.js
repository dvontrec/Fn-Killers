import React, { Component } from 'react';
import Axios from 'axios';

class Card extends Component {
  state = {
    stats: null
  };

  componentDidMount() {
    this.getStats();
  }

  async getStats() {
    let user = this.props.name;
    // let stats;
    let info = await Axios.get(
      `https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${user}`
    );
    let stats = await Axios.get(
      `https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${
        info.data.uid
      }&platform=${info.data.platforms[info.data.platforms.length - 1]}`
    );
    this.setState({ stats: stats.data.totals });
  }

  renderComponent() {
    if (this.state.stats) {
      return (
        <div>
          <p>Kills: {this.state.stats.kills}</p>
          <p>Total Matches: {this.state.stats.matchesplayed}</p>
          <p>Wins: {this.state.stats.wins}</p>
          <p>Win Rate: {this.state.stats.winrate}%</p>
          <p>K/D: {this.state.stats.kd}</p>
        </div>
      );
    }
    return <p>Loading</p>;
  }

  render() {
    return (
      <div className="statCard col-md-4">
        <h2>{this.props.name.toUpperCase()}</h2>
        {this.renderComponent()}
      </div>
    );
  }
}

export default Card;
