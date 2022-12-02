import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import GetIdData from "./Pages/GetIdData";
import RandomData from "./Pages/RandomData";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/getiddata/:id" element={<GetIdData />} />
          <Route path="random" element={<RandomData />} />
        </Routes>
      </div>
    );
  }
}
