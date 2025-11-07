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
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="flex flex-col justify-center ">
        <div
          className="relative top-5 w-screen h-[950px] bg-cover bg-center text-[40px] rounded-xl"
          style={{ backgroundImage: `url(${Home_page})` }}
        >
          <nav className="flex justify-center w-screen mx-auto mt-4 bg-white/30 backdrop-blur-sm rounded-3xl relative">
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

        <h1 className="flex justify-center nosifer mt-90 text-[#818F90] max-sm:text-[40px] sm:text-7xl md:text-8xl lg:text-9xl">
          BASKETBALL
        </h1>

        <div className="mb-80">
          <div className="flex justify-center mt-25">
            <div>
              <img src={lebron} alt="" />
              <p className="mt-4 opacity-60">
                "I like criticism. It makes you strong."
              </p>
              <b className="ml-3">-Lebron James</b>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mr-20 mb-80">
          <div className="flex items-center ">
            <img src={clark} alt="" />
            <div>
              <p className="pl-6 opacity-60">
                "If you want to be the best, you have to embrace the grind."
              </p>
              <b className="pl-9">-Caitlin Clark</b>
              <b></b>
            </div>
          </div>
          <div></div>
        </div>

        <div className="flex justify-center items-center ml-10 mb-80">
          <div className="flex items-center flex-row-reverse">
            <img src={tatum} alt="" />
            <div>
              <p className="pr-6 opacity-60 whitespace-pre-line">
                “You have to believe in yourself when no one else does.”
              </p>

              <b className="pr-9">-Jason Tatum</b>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center mr-20 mb-15 relative min-h-[800px]">
        <div className="flex items-center ">
          <img src={giannis} alt="" />

          <div>
            <p className="pl-6 opacity-60">
              “I never get too high on my highs or too low on my lows.”
            </p>
            <b className="pl-9">-Giannis Antetokounmpo</b>
            <b></b>
          </div>
        </div>
        <div></div>
      </div>

      <div className="ml">
      <Link>
        <span className="bg-[#38506b] max-sm:text-2xl  p-2 rounded-lg text-[#e6ebf0d3] sm:text-[25px]">
          Shop Life Style Shoes
        </span>
      </Link>
      </div>
    </>
  );
}

export default Home;
