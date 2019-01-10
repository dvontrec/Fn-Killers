import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav';

class Home extends Component {
  getData() {
    let headers = {
      'trn-Api-Key': 'a3a6cde3-be5c-4a74-9897-bae032c666e7'
    };
    axios
      .get(
        'https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=BossHeathen502'
      )
      .then(response => {
        let id = response.data.uid;
        let platform =
          response.data.platforms[response.data.platforms.length - 1];
        console.log(platform, id);
        axios
          .get(
            `https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${id}&platform=${platform}`
          )
          .then(data => {
            console.log(data);
          });
      });
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
