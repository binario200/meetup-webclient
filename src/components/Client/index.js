import React, { Component } from 'react'

import Attendees from './../Attendees';
import Feed from './../Feed';

class Client extends Component {
  render() {
    return (
      <div>
        Web Client
        <Feed />
        <Attendees />
      </div>
    );
  }
}

export default Client;
