import React, { Component } from "react";
import WithRouting from "../component/WithRouter";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    // this.onChnageHamdler = this.onChnageHamdler.bind(this);
    // this.asteroidDataHandler = this.asteroidDataHandler.bind(this);
    // this.andomAsteroidData = this.andomAsteroidData.bind(this);
  }

  onChnageHamdler = (e) => {
    e.preventDefault();
    this.setstate({ data: e.target.value });
  };

  asteroidDataHandler = (e) => {
    const { data } = this.state;

    this.props.navigate(`/getiddata/:${data}`);
  };
  randomAsteroidData = (e) => {
    e.preventDefault();
    this.props.navigate(`/random`);
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter Asteroid Id"
            onChange={this.onChnageHamdler}
            value={data}
          />
          <button type="button" onClick={this.asteroidDataHandler(data.id)}>
            Get Data
          </button>
          <button type="button" onClick={this.randomAsteroidData}>
            Get Random Data
          </button>
        </form>
      </div>
    );
  }
}

export default WithRouting(Form);
