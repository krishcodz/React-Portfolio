import React from "react";
import HeroImage from "../assets/HeroImagef.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <TypeAnimation className="text-4xl sm:text-7xl font-bold text-white"
        sequence={[
          "Hi, I'm Krishna Sai Ram", 1000,
          "I'm a web Developer", 1000,
          "I'm a valorant addict",1000,
        () => {
          console.log('Sequence completed');
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      />
          <p className="text-gray-500 py-4 max-w-md">
          I'm a student persuing computer science engineering in chennai. I ❤️ coffee and brew my own CODE.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full object-cover h-48 w-48 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
