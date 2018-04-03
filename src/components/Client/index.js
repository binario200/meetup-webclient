import React, { Component } from 'react'
import { getCommunityEvents, getEventRSVPS } from './../../services/meetup-api'
import Attendees from './../Attendees';
import Feed from './../Feed';

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      communityName: 'reactjs-dallas',
      events: [],
      RSVPS: []
    }
  }

  componentDidMount() {
    const { communityName } = this.state;
    getCommunityEvents(communityName)
    .then( events => {
      this.setState({ events });
    })
    .catch( err => {
      console.log(err);
    })

  }


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
