import React, { useState } from "react";
import { CardCourse } from "./CardCourse";
import { CardPagination } from "./CardPagination";

export const DashboardTabs = () => {
  const [current, setCurrent] = useState("tab1");
  return (
    <>
      <ul className="flex text-center border-b border-gray-200">
        <li className="  pl-px">
          <a
            className={
              current == "tab1"
                ? "relative block p-4 text-sm font-medium bg-white border-t border-l border-r border-gray-200"
                : "block p-4 text-sm font-medium text-gray-500 bg-gray-100 ring-1 ring-inset ring-white"
            }
            onClick={() => setCurrent("tab1")}
          >
            {current == "tab1" ? (
              <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
            ) : (
              ""
            )}
            All Courses
          </a>
        </li>

        <li className="  pl-px">
          <a
            className={
              current == "tab2"
                ? "relative block p-4 text-sm font-medium bg-white border-t border-l border-r border-gray-200"
                : "block p-4 text-sm font-medium text-gray-500 bg-gray-100 ring-1 ring-inset ring-white"
            }
            onClick={() => setCurrent("tab2")}
          >
            {current == "tab2" ? (
              <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
            ) : (
              ""
            )}
            Completed
          </a>
        </li>

        <li className="  pl-px">
          <a
            className={
              current == "tab3"
                ? "relative block p-4 text-sm font-medium bg-white border-t border-l border-r border-gray-200"
                : "block p-4 text-sm font-medium text-gray-500 bg-gray-100 ring-1 ring-inset ring-white"
            }
            onClick={() => setCurrent("tab3")}
          >
            {current == "tab3" ? (
              <span className="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
            ) : (
              ""
            )}
            Ongoing
          </a>
        </li>
      </ul>
      <br />
      <div className="grid m-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-x-5 items-start">
        {[...Array(6)].map((x, i) => (
          <CardCourse key={i} />
        ))}
      </div>
      <CardPagination />
      <br />
      <br />
    </>
  );
};
