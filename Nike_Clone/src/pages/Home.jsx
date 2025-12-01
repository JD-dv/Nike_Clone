import { useState, useEffect } from "react";
import Home_page from "../assets/images/home_page.png";
import Nike_1 from "../assets/images/Nike_1.svg";
import nike_shoe_1 from "../assets/images/nike_shoe_1.svg";
import nike_shoe_2 from "../assets/images/nike_shoe_2.svg";
import nike_shoe_3 from "../assets/images/nike_shoe_3.svg";
import shoe_grid from "../assets/images/shoe_grid.png";
import blue_grid from "../assets/images/blue_grid.png";
import long_grid from "../assets/images/long_grid.png";
import sport_pink_shoe from "../assets/images/sport_pink_shoe.png";
import sport_green_shoe from "../assets/images/sport_green_shoe.png";
import sport_colorful_shoe from "../assets/images/sport_colorful_shoe.png";
import lebron from "../assets/images/lebron.png";
import clark from "../assets/images/clark.png";
import tatum from "../assets/images/tatum.png";
import giannis from "../assets/images/giannis.png";
import colorfull_run from "../assets/images/colorfull_run.png";
import white_run from "../assets/images/white_run.png";
import blue_run from "../assets/images/blue_run.png";
import run_1 from "../assets/images/run_1.png"
import run_2 from "../assets/images/run_2.png"
import run_3 from "../assets/images/run_3.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="flex flex-col justify-center ">
        <div
          className="relative top-5 w-screen h-[950px] bg-cover bg-center text-[40px] rounded-xl"
          style={{ backgroundImage: `url(${Home_page})` }}
        >
          <nav className="flex justify-center w-screen  mt-4 bg-white/30 backdrop-blur-sm rounded-3xl relative">
            <img
              src={Nike_1}
              alt=""
              className="w-[42px] absolute left-4 sm:w-[60px] xl:left-10"
            />
            <Navbar />
          </nav>
          <h1
            className="absolute top-[250px] left-10 font-inter  text-[45px] text-shadow-lg/10  bg-gradient-to-l from-[#b7bbe4] via-[#6f9debcc] to-white bg-clip-text text-transparent
          sm:text-[60px] md:text-[75px] lg:text-[80px] "
          >
            Where Simplicity Meets Comfort
          </h1>
          <Link>
            <span className="absolute bg-[#38506b] top-[400px] max-sm:text-[15px] max-sm:left-10 p-1.5 rounded-lg text-[#e6ebf0d3] sm:text-[20px] sm:top-[440px] sm:left-10 md:top-[480px] lg:top-[510px] xl:top-[400px]">
              Shop Nike Monarch IV
            </span>
          </Link>
        </div>
      </main>

      <section className="mt-80 w-screen sm:h-[1800px] md:h-[900px] lg:h-[950px]">
        <h1 className="luckyguy flex justify-center text-9xl max-sm:text-7xl sm:text-8xl">
          Life Style
        </h1>
        <div className="flex max-sm:flex-col sm:flex-col relative w-screen lg:mt-10">
          <img
            src={nike_shoe_1}
            alt=""
            className="md:absolute md:w-[320px] lg:w-[520px]"
          />
          <img
            src={nike_shoe_2}
            alt=""
            className="md:absolute md:w-[320px] lg:w-[520px] md:top-[190px] lg:top-[300px]"
            style={{ left: "32vw" }}
          />
          <img
            src={nike_shoe_3}
            alt=""
            className="md:absolute md:w-[320px] md:right-0 lg:w-[520px]"
          />
        </div>
      </section>

      <section className="min-h-[1000px] mx-5 max-sm:mt-80">
        <h1 className="font-inter flex justify-center text-3xl sm:text-5xl lg:text-7xl">
          Comfort Style Versatility.
        </h1>
        <div className="flex justify-center items-center gap-10 mt-10 max-sm:flex-col">
          <div className="">
            <img src={shoe_grid} alt="" className="mb-8" />
            <img src={blue_grid} alt="" />
          </div>
          <div>
            <img src={long_grid} alt="" />
          </div>
        </div>

        <div className="mt-10 xl:ml-20 max-sm:ml-5 sm:ml-6">
          <h2 className="mb-5 text-4xl max-sm:mb-14 sm:mb-10 sm:text-5xl">
            Your perfect everyday Nike.
          </h2>
          <Link>
            <span className="bg-[#38506b] max-sm:text-2xl  p-2 rounded-lg text-[#e6ebf0d3] sm:text-[25px]">
              Shop Life Style Shoes
            </span>
          </Link>
        </div>
      </section>

      <section className="min-h-[1000px] max-sm:mt-[300px] xl:mt-[450px]">
        <h1 className="flex justify-center items-center text-6xl nosifer text-[#A1CEE7]">
          Sports
        </h1>

        <div className="flex flex-col justify-center items-center gap-15 md:relative md:h-[800px]">
          <img
            src={sport_pink_shoe}
            alt=""
            className=" max-sm:w-[300px] max-sm:mt-20 md:absolute md:top-[83px] md:right-0 xl:right-20 sm:mt-15"
          />
          <img
            src={sport_green_shoe}
            alt=""
            className="max-sm:w-[300px] md:absolute md:top-[350px]"
          />
          <img
            src={sport_colorful_shoe}
            alt=""
            className="max-sm:w-[300px] md:absolute md:top-[590px] md:left-0 xl:left-20"
          />
        </div>

        <h1 className="flex justify-center nosifer mt-50 text-[#818F90] max-sm:text-[40px] sm:text-7xl md:text-7xl lg:text-8xl">
          BASKETBALL
        </h1>

        <div className="mb-40">
          <div className="flex justify-center mt-25  max-sm:justify-center max-sm:items-center">
            <div className="text-center">
              <img
                src={lebron}
                alt=""
                className="max-sm:w-[400px] sm:w-[640px]  md:w-[660px] lg:w-[1000px]"
              />
              <p className="mt-4 opacity-60">
                "I like criticism. It makes you strong."
              </p>
              <b className="ml-3">-Lebron James</b>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center mb-40">
          <div className="flex flex-col text-center lg:flex-row lg:text-left lg:items-center">
            <img
              src={clark}
              alt=""
              className="w-[400px] sm:w-[640px] md:w-[560px] lg:w-[500px] mx-auto lg:mx-0"
            />
            <div className="lg:ml-6 mt-4 lg:mt-0">
              <p className="opacity-60">
                "If you want to be the best, you have to embrace the grind."
              </p>
              <b>-Caitlin Clark</b>
            </div>
          </div>
          <div></div>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center mb-40 lg:mr-30 xl:mr-53 xl:ml-21">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
            <img
              src={tatum}
              alt=""
              className="w-[400px] sm:w-[640px] lg:w-[500px] mx-auto lg:mx-0"
            />
            <div className="lg:ml-6 mt-4 lg:mt-0">
              <p className="mt-4 opacity-60 max-sm:w-[400px] sm:w-[550px] lg:w-[300px]">
                "At the end of the day, we all want to win, so everybody has to
                sacrifice when you want to be a part of something special."
              </p>
              <b>-Jason Tatum</b>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-center lg:items-center mb-15  lg:mr-30">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left max-sm:flex max-sm:flex-col max-sm:text-center  sm:flex-col sm:text-center">
            <img src={giannis} alt="" className="max-sm:w-[350px] lg:mr-6" />

            <div>
              <p className="mt-4 max-sm:ml-2  opacity-60 max-sm:w-[350px] sm:w-[550px] lg:w-[300px]">
                "Whatever I try to do, I always try to give it my best and try
                to be a killer because, at the end of the day, if you don't work
                hard, you are not going to get food on your table."
              </p>
              <b className="max-sm:ml-3">-Giannis Antetokounmpo</b>
              <b></b>
            </div>
          </div>
        </div>

        <div className="max-sm:ml-30 mt-20 sm:ml-10 md:ml-22 xl:ml-70 mb-50">
          <Link>
            <span className="bg-[#38506b] max-sm:text-2xl  p-2 rounded-lg text-[#e6ebf0d3] sm:text-[25px]">
              Shop Life Style Shoes
            </span>
          </Link>
        </div>
      </section>

      <section className="min-h-[1000px] max-sm:mt-[300px] xl:mt-[450px]">
        <h1 className="quando flex justify-center item-center text-9xl max-sm:text-7xl sm:text-8xl text-[#81A7C8]">Runners</h1>

        <div className="relative max-md:flex max-md:flex-col max-md:items-center mt-20 min-h-[700px] mb-50">
      <img src={white_run} alt="" className="md:absolute md:w-[370px] md:left-0 lg:absolute lg:left-10" />
      <img src={colorfull_run} alt="" className="md:absolute md:w-[370px] md:left-50 md:top-80 lg:absolute xl:left-[500px] lg:top-[200px] lg:left-[400px]"/>
      <img src={blue_run} alt=""  className="md:absolute md:w-[370px] md:right-0 lg:absolute lg:right-10"/>
        </div>
        <div className="xl:ml-50 flex flex-col xl:gap-y-7 md:gap-y-10 max-md:gap-y-30">
          <div className="flex items-center gap-x-7 max-md:flex-col">
          <img src={run_1} alt="" className="md:w-[380px] max-md:w-[460px] md:ml-5 lg:w-[400px] rounded-lg"/>
          <p>Conquer Peaks. Run the Mountain.</p>
          </div>
          <div className="flex items-center gap-x-7 max-md:flex-col"> 
          <img src={run_2} alt="" className="md:w-[380px] max-md:w-[460px] md:ml-5 lg:w-[400px] rounded-lg"/>
          <p>Stride Boldly Across the Bridge.</p>
          </div>

          <div className="flex items-center gap-x-7 max-md:flex-col">
          <img src={run_3} alt="" className="md:w-[380px] max-md:w-[460px] md:ml-5 lg:w-[400px] rounded-lg"/>
          <p>Power Every Step Uphill.</p>
          </div>
        </div>
        <div className="max-sm:ml-7 mt-25  max-md:ml-25 md:ml-22 xl:ml-56 mb-50">
          <Link>
            <span className="bg-[#38506b] max-sm:text-2xl  p-2 rounded-lg text-[#e6ebf0d3] sm:text-[25px]">
              Shop Life Style Shoes
            </span>
          </Link>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Home;
