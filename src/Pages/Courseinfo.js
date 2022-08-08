import React, { Component } from "react";
// import "./index.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { CourseInfo } from "../Components/CourseInfo";
// import { CardCourse } from "../Components/CardCourse";
// import Sidebar from "../Components/Sidebar";

class Courseinfo extends Component {
  render() {
    return (
      <>
        <div className="flex">
          <main className="flex-1">
            <Navbar />
            <CourseInfo />
            <Footer />
          </main>
        </div>
      </>
    );
  }
}
export default Courseinfo;
