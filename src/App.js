import React, { Component } from 'react';
import Avatar from "./AvatarInitials"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar
          name="Brandon Sueur"
          bgColor="#9F93F8"
        />

        <Avatar
          name="Alain Boris"
          bgColor="#93F8CB"
          rounded={false}
        />
      </div>
    )
  }
}
