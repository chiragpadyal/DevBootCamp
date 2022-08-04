// import { format } from "prettier";
import React, { useState } from "react";
import { CardCourse } from "./CardCourse";

export const CardFLow = () => {
  const [more, setmore] = useState(false);
  const showmore = () => setmore(!more);
  return (
    <>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-serif font-bold sm:text-4xl">
            Our Speacial Courses
          </h2>
        </div>
      </div>
      <div className="grid m-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-y-10 gap-x-5 items-start">
        {[...Array(more ? 18 : 6)].map((x, i) => (
          <CardCourse key={i} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="block w-1/2 lg:w-1/4 p-4 mt-4 text-sm font-medium rounded-sm border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200"
          type="button"
          onClick={showmore}
        >
          {more ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
};
