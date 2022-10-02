import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./features/Users/Login";
import Signup from "./features/Users/Signup";
import Dashboard from "./features/Users/Dasshboard";
import { PrivateRoute } from "./helpers/PrivateRoute";

import { Dashboard as DashMain } from "./Pages/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
import { AddCourse } from "./Pages/AddCourse";
import Courseinfo from "./Pages/Course";
import { QuizPanel } from "./Components/QuizPanel";
import { Categories } from "./Pages/Categories";
// import StripePaymentForm from "./Pages/StripePayment";
import Stripe from "./Stripe/Stripe";
export default class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div className="App">
          <Switch>
            {/* <Route path="/DevBootCamp/" exact element={<Home />} /> */}

            {/* <Route path="/DevBootCamp/:dynamic" component={NoMatch} /> */}
            <Route exact component={QuizPanel} path="/test" />

            <Route exact component={Login} path="/DevBootCamp/login" />
            <Route exact component={Signup} path="/DevBootCamp/signup" />
            <Route exact component={Dashboard} path="/DevBootCamp" />
            <PrivateRoute path="/DevBootCamp/category" component={Categories} />
            <PrivateRoute
              exact
              path="/DevBootCamp/course/:dynamic"
              component={Courseinfo}
            />
            <PrivateRoute path="/DevBootCamp/dashborad" component={DashMain} />
            <Route path="/DevBootCamp/add" component={AddCourse} />
            <Route path="/DevBootCamp/test" component={Stripe} />
            <Redirect from="/" to="/DevBootCamp/" />
          </Switch>
        </div>
      </Router>
    );
  }
}
