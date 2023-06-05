import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import c from "../assets/c.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import express from "../assets/expressjs.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png"

const Skills= () => {
  const programming = [
    {
      id: 1,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: c,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: java,
      title: "Java",
      style: "shadow-blue-600",
    }
  ];
  const frontend = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    }];

    const backend = [
      {
        id: 1,
        src: nodejs,
        title: "Node JS",
        style: "shadow-green-400",
      },
      {
        id: 2,
        src: nextjs,
        title: "Next JS",
        style: "shadow-white",
      },
      {
        id: 3,
        src: express,
        title: "Express JS",
        style: "shadow-white",
      },
      {
        id: 4,
        src: mongodb,
        title: "Mongo DB",
        style: "shadow-green-400",
      }
    ]
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 mt-0.2 mflex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </div>
        <p className="py-6 font-medium text-2xl">Programming Languages Known</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {programming.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <p className="py-6 font-medium text-2xl">Front End</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {frontend.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <p className="py-6 font-medium text-2xl">Back End</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {backend.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
