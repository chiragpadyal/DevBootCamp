import React, { useState } from "react";
import "./stylecourseinfo.css";
import { DataCourses } from "./DataCourses";
export const CourseInfo = () => {
  const data = DataCourses[0];
  let publicURL = process.env.PUBLIC_URL;
  const [mainPic, setPic] = useState(publicURL + "/" + data.Images[0]);
  const setPicture = (e) => setPic(e);
  return (
    <>
      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div>
            <h1 className="text-2xl font-bold lg:text-3xl">{data.title}</h1>

            <p className="mt-1 text-sm text-gray-500">SKU: #012345</p>
          </div>

          <div className="grid gap-8 lg:items-start lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <img
                  alt=""
                  src={mainPic}
                  className="w-full rounded-xl h-72 lg:h-[540px] object-cover"
                />
              </div>

              <ul className="flex gap-1 mt-1">
                {data.Images.map((item, index) => {
                  return (
                    <li key={index}>
                      <a onClick={() => setPicture(publicURL + "/" + item)}>
                        <img
                          className="object-cover w-16 h-16 rounded-md"
                          src={publicURL + "/" + item}
                          alt=""
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="lg:top-0 lg:sticky">
              <form className="space-y-4 lg:pt-8">
                <fieldset>
                  <legend className="text-lg font-bold">Color</legend>

                  <div className="flex mt-2 space-x-1">
                    <label htmlFor="color_green" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_green"
                        name="color"
                        className="sr-only peer"
                        checked
                      />

                      <span className="block w-6 h-6 bg-green-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
                    </label>

                    <label htmlFor="color_blue" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_blue"
                        name="color"
                        className="sr-only peer"
                      />

                      <span className="block w-6 h-6 bg-blue-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
                    </label>

                    <label htmlFor="color_pink" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_pink"
                        name="color"
                        className="sr-only peer"
                      />

                      <span className="block w-6 h-6 bg-pink-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
                    </label>

                    <label htmlFor="color_red" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_red"
                        name="color"
                        className="sr-only peer"
                      />

                      <span className="block w-6 h-6 bg-red-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
                    </label>

                    <label htmlFor="color_indigo" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_indigo"
                        name="color"
                        className="sr-only peer"
                      />

                      <span className="block w-6 h-6 bg-indigo-700 border border-gray-200 rounded-full ring-1 ring-offset-1 ring-transparent peer-checked:ring-gray-300"></span>
                    </label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-lg font-bold">Tags</legend>

                  <div className="flex mt-2 space-x-1">
                    {data.tags.map((item, index) => {
                      return (
                        <label
                          key={index}
                          htmlFor="material_cotton"
                          className="cursor-pointer"
                        >
                          <span className="block px-3 py-1 text-xs border border-gray-200 rounded-full peer-checked:bg-gray-100">
                            {item}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="p-4 bg-gray-100 border rounded">
                  <p className="text-sm">
                    <span className="block">
                      Pay as low as $3/mo with 0% APR.
                    </span>

                    <a href="" className="inline-block mt-1 underline">
                      Find out more
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">$19.99</p>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-red-700 rounded"
                  onClick={() => setPicture("")}
                >
                  Add to cart
                </button>

                <button
                  type="button"
                  className="w-full px-6 py-3 text-sm font-bold tracking-wide uppercase bg-gray-100 border border-gray-300 rounded"
                >
                  Notify when on sale
                </button>
              </form>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <p>{data.dis}</p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  eveniet ipsam mollitia nesciunt illo! Suscipit, corrupti!
                </p>

                <h3>Features</h3>

                <ul>
                  <li>Smooth neck design</li>
                  <li>Breathable fabric</li>
                  <li>Odour prevention</li>
                  <li>Made from recycled materials</li>
                </ul>

                <iframe
                  src="https://www.youtube-nocookie.com/embed/Eb-Vfe61W6A?controls=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
