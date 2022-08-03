import React, { Component } from "react";
// import "./index.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Intro from "../Components/Intro";
// import { CardCourse } from "../Components/CardCourse";
import { CardFLow } from "../Components/CardFLow";
import { SectionStats } from "../Components/SectionStats";
import { Testimonials } from "../Components/Testimonials";
// import Sidebar from "../Components/Sidebar";

class Home extends Component {
  render() {
    return (
      <>
        <div className="flex">
          <main className="flex-1">
            <Navbar />
            <Intro />
            <CardFLow />
            <SectionStats />
            <Testimonials />
            <Footer />
          </main>
        </div>
      </>
    );
  }
}
export default Home;
