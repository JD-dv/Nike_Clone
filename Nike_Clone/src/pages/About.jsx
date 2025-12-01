import { useState } from "react";
import aboutIcon from "../assets/icons/boy.png";
import techStack from "../assets/icons/stack.png";
import moto from "../assets/icons/testimonial.png";

import NavBar from "../components/Navbar";
const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const [tab, setTab] = useState({
    title: "Curious. Creative. Code-driven.",
    sentence:
      " Hi, I'm Jun Dejolde, aspiring software engineer exploring the world of coding through creativity and hands on project. This website is a part of my journey to become a software engineer someday. I chose Sony to build a clone website, because it fits my aethetics and since I was at a young age, we always had Sony. And personally, I like the Brand Sony. So I decided to create a clone website to practice.",
  });

  const tabOne = {
    title: "Curious. Creative. Code-driven.",
    sentence:
      " Hi, I'm Jun Dejolde, aspiring Software Engineer/AI Engineer exploring the world of coding through creativity and hands on project.This website is a part of my journey to be a software engineering someday.",
  };

  const tabTwo = {
    title: "Tools I use to build this website",
    sentence:
      "I currently work with tools that help me build fast, clean, reusable component, and responsive design.",
    stack: ["React.JS", "TailwindCSS", "JavaScript", "HTML", "CSS"],
  };

  const tabThree = {
    title: "Build, Break, Learn, Repeat",
    sentence:
      "I believe the best way to learn code, is by doing projects, startup projects, and solve problem that people are facing. Evevry Bugs I fix is a stepping stone to my goal. ",
  };

  const handleTabOne = () => {
    setActiveTab("about");
    setTab(tabOne);
  };
  const handleTabTwo = () => {
    setActiveTab("tech");
    setTab(tabTwo);
  };
  const handleTabThree = () => {
    setActiveTab("moto");
    setTab(tabThree);
  };

  return (
    <>
    <div className="flex justify-center w-screen  mt-4 bg-blue-200 rounded-3xl text-2xl ">
      <NavBar />
    </div>
      <main className="flex items-center justify-center w-full min-h-screen max-md:w-[850px] animate-slowSlideUp">
        <div className=" w-[900px] h-[500px] bg-white shadow-xl/20 rounded-b-xl">
          <div className="flex p-3 gap-2 bg-neutral-800 w-full h-10 rounded-t-lg">
            <div className="w-5  h-5 rounded-full bg-red-400 cursor-pointer"></div>
            <div className="w-5  h-5 rounded-full bg-yellow-400 cursor-pointer"></div>
            <div className="w-5  h-5 rounded-full bg-green-400 cursor-pointer"></div>
            <div className="text-right text-white ml-[550px]">
              Developer Practice -Jun Dejolde
            </div>
          </div>
          <div className="w-full h-9 bg-neutral-300 flex">
            <div
              className={`w-full border-r-2 border-neutral-400 pl-4 flex items-center cursor-pointer ${
                activeTab === "about" ? "bg-neutral-100" : ""
              }`}
              onClick={handleTabOne}
            >
              <img src={aboutIcon} alt="" className="mr-3" />
              About me
            </div>
            <div
              className={`w-full border-r-2 border-neutral-400 pl-4 flex items-center cursor-pointer ${
                activeTab === "tech" ? "bg-neutral-100" : ""
              }`}
              onClick={handleTabTwo}
            >
              <img src={techStack} alt="" className="mr-3" />
              Tech Stack
            </div>
            <div
              className={`w-full border border-neutral-300 pl-4 flex items-center cursor-pointer ${
                activeTab === "moto" ? "bg-neutral-100" : ""
              }`}
              onClick={handleTabThree}
            >
              <img src={moto} alt="" className="mr-3" />
              Moto
            </div>
          </div>
          <p className="p-3 ml-2 text-2xl font-nunito">{tab.title}</p>
          <p className="p-4 ml-2 mr-2 text-xl font-nunito">{tab.sentence}</p>
          <div>
            {tab.stack && (
              <ul className="list-disc pl-5">
                {tab.stack.map((item, index) => (
                  <li key={index} className="ml-6 font-montserrat">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default About;