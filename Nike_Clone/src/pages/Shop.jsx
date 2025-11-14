import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import panel_left from "../assets/images/panel_left.svg";
import panel_right from "../assets/images/panel_right.svg";
import { useState, useEffect } from "react";

function Shop() {
  //When the search bar is empty and tries to search it, it should not send any data.
  //when i search for "Nike Dunk low LX" it only returns the first one it finds, ->
  //->it should find all the same shoes and display it in the page since it has 3 same name in the database.
  //when i search for "air" it return error.
  //when the search bar is empty, it should return back to the page.
  //when a use enters or searchs a product, it should auto delete the search bar.
  //implement searchbar component for future pages like apparel, hat, etc.
  //implement listener for enter/return for easy search.
  //fix backend and try to optimize query.

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
    fetch(`http://localhost:8000/search?query=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("RESULT", data);
        setShoes(data || []);
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
        <div className="bg-white min-h-screen rounded-2xl p-4 ">
          <h2 className="text-2xl font-bold">Main Section</h2>
          <input
            type="text"
            className="border rounded-2xl p-1 text-center"
            placeholder="Search Shoes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            id="searchButton"
            className="cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
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
