import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import { FaLock } from "react-icons/fa";
// import Sidebar from "../Components/Sidebar";
// import Sidebar from "../Components/Sidebar";
import "../Components/styleCoursePanel.css";
import { Textcontent } from "../Components/Textcontent";
import { DataCourses } from "../Components/DataCourses";
export const CoursePanel = () => {
  const data = DataCourses[0].Index;
  useEffect(() => {
    // Fetch all the details element.
    const details = document.querySelectorAll("details");

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  });
  const loadIndex = () => {
    let list = [];
    for (let k in data) {
      {
        list.push(
          <li key={k} className="nav-item mb-2">
            <details className="group">
              <summary className=" hover:text-purple-600 truncate flex items-center justify-between rounded-lg cursor-pointer bg-gray-50">
                <h5 className="nav-link text-purple-800 text-gray-900">
                  <span className="fa fa-list-alt mr-2"></span>
                  {k}
                </h5>

                <svg
                  className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul>
                {data[k].data.map((item, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <a
                        className={
                          data[k].locked
                            ? "nav-link pointer-events-none flex  justify-between  text-purple-400 hover:text-purple-600"
                            : "nav-link  flex  justify-between  text-purple-400 hover:text-purple-600"
                        }
                        href="/#reports"
                      >
                        <span className="fa fa-chart-bar ml-2">{item}</span>
                        {data[k].locked ? <FaLock /> : ""}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        );
      }
    }
    return list;
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap py-4">
          <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
            <div className="sticky top-0 p-4 w-full">
              {/* <!-- navigation --> */}
              <ul className="nav flex flex-col overflow-hidden">
                {loadIndex()}
              </ul>
            </div>
          </aside>
          <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            {/* <!-- content area --> */}
            <Textcontent />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
