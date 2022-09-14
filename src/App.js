import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import Home from "./Pages/Home";
// import { Login } from "./Pages/Login";

import Login from "./features/Users/Login";
import Signup from "./features/Users/Signup";
import Dashboard from "./features/Users/Dasshboard";
import { PrivateRoute } from "./helpers/PrivateRoute";

import { Dashboard as DashMain } from "./Pages/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
// import { CoursePanel } from "./Pages/CoursePanel";
import { AddCourse } from "./Pages/AddCourse";
import Article from "./Pages/loadMdDynamic";
import Courseinfo from "./Pages/Course";
// import { NoMatch } from "./Pages/NoMatch";

export default class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div className="App">
          <Switch>
            {/* <Route path="/DevBootCamp/" exact element={<Home />} /> */}

            {/* <Route path="/DevBootCamp/:dynamic" component={NoMatch} /> */}
            <Route exact component={Login} path="/DevBootCamp/login" />
            <Route exact component={Signup} path="/DevBootCamp/signup" />
            <Route exact component={Dashboard} path="/DevBootCamp" />
            {/* <PrivateRoute
              path="/DevBootCamp/course/:dynamic/content"
              component={CoursePanel}
            /> */}
            <PrivateRoute
              exact
              path="/DevBootCamp/course/:dynamic"
              component={Courseinfo}
            />
            <PrivateRoute path="/DevBootCamp/category" component={DashMain} />
            <Route path="/DevBootCamp/add" component={AddCourse} />
            <Route path="/DevBootCamp/test" component={Article} />
            <Redirect from="/" to="/DevBootCamp/" />
          </Switch>
        </div>
      </Router>
    );
  }
}
