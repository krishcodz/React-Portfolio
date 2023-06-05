import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm a MERN stack developer. Passionate about building scalable and reliable web applications. I have a strong understanding of the MERN stack, and I am proficient in JavaScript, React, Node.js, and MongoDB. I am also familiar with other technologies such as Docker, Kubernetes, and AWS.
        </p>

        <br />

        <p className="text-xl">
        I have a strong foundation in data structures and algorithms. I am also proficient in a variety of programming languages, including Python, C, C++, and Java. I have experience with a variety of programming paradigms, including object-oriented programming, functional programming, and procedural programming.
        I am also a member of several online communities and forums where I discuss programming problems and get help from other programmers. I am always willing to help others and I enjoy sharing my knowledge.
        </p>
      </div>
    </div>
  );
};

export default About;
