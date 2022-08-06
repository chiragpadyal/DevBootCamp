import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courseinfo from "./Pages/Courseinfo";

import Home from "./Pages/Home";
import { Login } from "./Pages/Login";
import ScrollToTop from "./Components/ScrollToTop";
import { CoursePanel } from "./Pages/CoursePanel";
import { NoMatch } from "./Pages/NoMatch";
export default class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/DevBootCamp/" exact element={<Home />} />
            <Route
              path="/DevBootCamp/login"
              element={<Login value="login" />}
            />
            <Route
              path="/DevBootCamp/signup"
              element={<Login value="signup" />}
            />
            <Route path="/DevBootCamp/course" element={<Courseinfo />} />
            <Route
              path="/DevBootCamp/course/:dynamic"
              element={<CoursePanel />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
