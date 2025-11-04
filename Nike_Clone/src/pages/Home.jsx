import Home_page from "../assets/images/home_page.png";
import Nike_1 from "../assets/images/Nike_1.svg";
import nike_shoe_1 from "../assets/images/nike_shoe_1.svg"
import nike_shoe_2 from "../assets/images/nike_shoe_2.svg"
import nike_shoe_3 from "../assets/images/nike_shoe_3.svg"
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
            className="absolute top-[250px] left-10 font-inter  text-[45px] text-shadow-lg/10  bg-gradient-to-l from-[#a7adee] via-[#cfdbf0cc] to-white bg-clip-text text-transparent
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

      <section className="mt-50 w-screen">
        <h1 className="luckyguy flex justify-center text-9xl max-sm:text-7xl">Life Style</h1>
        <div className="flex relative w-screen">
          <img src={nike_shoe_1} alt=""  className="absolute "/>
          <img src={nike_shoe_2} alt=""  className="absolute "/>
          <img src={nike_shoe_3} alt=""  className="absolute "/>
        </div>
      </section>
    </>
  );
}

export default Home;
