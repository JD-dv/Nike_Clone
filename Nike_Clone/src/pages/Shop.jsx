import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import panel_left from "../assets/images/panel_left.svg";
import panel_right from "../assets/images/panel_right.svg";
import search from "../assets/images/search.png";
import { useState, useEffect } from "react";

function Shop() {
  //implement searchbar component for future pages like apparel, hat, etc.
  //implement home button.
  //implement sorting by price.
  //add view detail page.
  //implement style to shop.jsx
  //improve grid responsive layout

  const [panel, setpanel] = useState(false);
  const [mediumDev, setmeddiumDev] = useState(false);
  const [shoes, setShoes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => {
        setShoes(data);
      })
      .catch((err) =>
        console.error("Something went wrong. please try again", err)
      );
  }, []);

  function handlePanel() {
    setpanel((prev) => !prev);
  }

  function handleMediumDevice() {
    setmeddiumDev((prev) => !prev);
  }

  function handleSearch() {
    if (search.trim() === "") {
      return;
    }

    fetch(`http://localhost:8000/search?query=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("RESULT", data);
        setShoes(data || []);
        setSearch("");
      })
      .catch((err) =>
        console.error("could not find what you are looking for", err)
      );
  }

  
  return (
    <div className="flex items-start h-screen p-2 overflow-hidden bg-gray-200">
      <Sidebar panel={panel} mediumDev={mediumDev} />
      <span
        className="mt-10 cursor-pointer"
        onClick={() => {
          handlePanel();
          handleMediumDevice();
        }}
      >
        <img
          src={panel ? panel_right : panel_left}
          alt=""
          className="opacity-60 w-[22px]"
        />
      </span>
      <main className="flex-1 bg-gray-200 p-2 overflow-y-auto h-full">
        <div className="bg-white min-h-screen rounded-2xl p-4">
          <div className="ml-7 mt-5">
            <input
              type="text"
              className="border rounded-2xl p-1 text-center"
              placeholder="Search Shoes"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button
              id="searchButton"
              className="cursor-pointer ml-1"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shoes.map((shoe, index) => (
              <Card key={index} shoe={shoe} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Shop;
