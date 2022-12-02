import React, { Component } from "react";
import WithRouting from "../component/WithRouter";
class DisplayAllData extends Component {
  render() {
    return (
      <div>
        <div>Asteroid Name: {this.props.name}</div>
        <div> Neo Reference ID: {this.props.neo_reference_id}</div>
      </div>
    );
  }
}
export default WithRouting(DisplayAllData);
