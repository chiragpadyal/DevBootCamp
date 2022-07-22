import React, { Component } from "react";
// import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Homepage />
        <Footer />
      </>
    );
  }
}
export default App;
