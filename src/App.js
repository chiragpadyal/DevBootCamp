import React, { Component } from "react";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/DevBootCamp/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
