import React, { Component } from "react";
import WithRouting from "../component/WithRouter";
import DisplayAllData from "./DisplayAllData";
class GetIdData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIdData: {}
    };
  }
  componentDidMount() {
    const { id } = this.props.params;
    this.getDataWithID(id);
  }
  getDataWithID = async (id) => {
    try {
      const res = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=CSxKGsTgc73LWDCDQgKrC9j9lKZpgawKcmrLvbaX`
      );
      const getRes = await res.json();
      this.setState(getRes);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { displayIdData } = this.state;
    return (
      <div>
        <DisplayAllData {...displayIdData} />
      </div>
    );
  }
}
export default WithRouting(GetIdData);
