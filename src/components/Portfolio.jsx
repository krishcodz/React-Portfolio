import React from "react";
import blogsite from "../assets/portfolio/blogsite.png";
import todolist from "../assets/portfolio/todolist.png";
import googleoauth from "../assets/portfolio/google-oauth.png";
import quizapp from "../assets/portfolio/quizapp.png";
import postman from "../assets/portfolio/postman.png"
import passwordmanager from "../assets/portfolio/passwordmanager.png";
import { FaGithub} from "react-icons/fa";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blogsite,
      name: "Blog-Site",
      projlink: "https://github.com/krishcodz/Blog-application-v2",
    },
    {
      id: 2,
      src: todolist,
      name: "Todo-List",
      projlink: "https://github.com/krishcodz/Todolist-Reactjs",
    },
    {
      id: 3,
      src: postman,
      name: "Restful-API",
      projlink: "https://github.com/krishcodz/Restful-Api",
    },
    {
      id: 4,
      src: googleoauth,
      name: "Google-Oauth",
      projlink: "https://github.com/krishcodz/Google-Oauth-NodeJS",
    },
    {
      id: 5,
      src: quizapp,
      name: "Quiz-Web-App",
      projlink: "https://github.com/krishcodz/Quiz-app-only-js",
    },
    {
      id: 6,
      src: passwordmanager,
      name: "Password-Manager",
      projlink: "https://github.com/krishcodz/password_manager",
    },
  ];
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, projlink}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg" onClick={() => openInNewTab(projlink)}>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

                <button className="py-2 duration-200 hover:scale-105">
                  <span className="inline"> <FaGithub size={20} className="inline" /> {name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
