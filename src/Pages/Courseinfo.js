import React, { useEffect, useState } from "react";
// import "./index.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { CourseInfo } from "../Components/CourseInfo";
// import { CardCourse } from "../Components/CardCourse";
// import Sidebar from "../Components/Sidebar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCourse,
  userSelector,
  // clearState,
} from "../features/Data/fetchData";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
// import { Redirect } from "react-router";

const Courseinfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    // isFetching,
    //e,
    isSuccess,
    courseData,
    isError,
  } = useSelector(userSelector);
  const location = useLocation();
  const [pathName, setPathName] = useState(null);

  useEffect(() => {
    if (location) {
      let tmp = location.pathname.slice(
        location.pathname.lastIndexOf("/"),
        location.pathname.length
      );
      console.log(tmp);
      setPathName(tmp);
    }
  }, [location]);

  useEffect(() => {
    if (pathName) {
      const token = localStorage.getItem("token");
      dispatch(getCourse({ token: token, id: pathName }));
    }
  }, [pathName]);

  useEffect(() => {
    if (isError) {
      history.push("/");
    }
  }, [isError]);

  return (
    <>
      {!isSuccess ? (
        <div className="flex items-center justify-center h-screen">
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
      ) : (
        <div className="flex">
          <main className="flex-1">
            <Navbar />
            <CourseInfo data={courseData} />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};
export default Courseinfo;
