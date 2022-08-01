import React from "react";

export const CardCourse = () => {
  return (
    <a
      href=""
      className="block transform transition duration-500 hover:scale-105 border-solid hover:border-2 hover:border-purple-600 overflow-hidden rounded-2xl"
    >
      <img
        className="object-cover w-full h-56"
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />

      <div className="p-4 bg-gray-900">
        <p className="text-xs text-gray-500">website.com</p>

        <h5 className="text-sm text-white">
          How to position your furniture for positivity
        </h5>

        <p className="mt-1 text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis
          aliquid accusamus? Sint, sequi voluptas.
        </p>
        <button
          className="block w-full p-4 mt-4 text-sm font-medium rounded-sm border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200"
          type="button"
        >
          Enroll
        </button>
      </div>
    </a>
  );
};
