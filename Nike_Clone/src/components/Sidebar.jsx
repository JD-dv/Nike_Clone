import { Link } from "react-router-dom";
import nike_1 from "../assets/images/nike_1.svg";
import panel_left from "../assets/images/panel_left.svg";
import { useState } from "react";

function Sidebar({panel, mediumDev}) {


  return (
    <aside className={`flex flex-col  p-5 sticky top-0 ${panel ? 'hidden': ''} ${mediumDev ? 'max-md:block ':'max-md:hidden'} `}>
      <div className="flex items-center gap-x-2 mb-16">
        <img src={nike_1} alt="Nike Logo" className="w-[80px]" />
      </div>
      <nav className="flex flex-col gap-y-2">
        <Link>Shoes</Link>
        <Link>Apparel</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
