import React, { Component } from "react";
import WithRouting from "../component/WithRouter";
import DisplayAllData from "./DisplayAllData";
class RandomData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getRandomData: []
    };
  }

  async componentDidMount() {
    try {
      const randomRes = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=dJnLyA8ba2PJCj4BubQAl4Gp8fJ7m0uGYBOoyw6M`
      );
      const getRandomResponse = await randomRes.json();
      this.setState(getRandomResponse);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { getRandomData } = this.state;
    return (
      <div>
        {getRandomData.near_earth_objects?.map((items) => {
          return (
            <div key={items.id}>
              <DisplayAllData {...items} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default WithRouting(RandomData);
