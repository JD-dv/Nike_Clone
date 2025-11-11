import Sidebar from "../components/Sidebar";
import panel_left from "../assets/images/panel_left.svg";
import panel_right from "../assets/images/panel_right.svg";
import { useState } from "react";
function Shop() {
  const [panel, setpanel] = useState(false);
  const [mediumDev, setmeddiumDev] = useState(false);

  function handlePanel() {
    setpanel((prev) => !prev);
  }

  
    function handleMediumDevice(){
      setmeddiumDev(prev => !prev)
    }
  

  return (
    <div className="flex items-start h-screen p-2 overflow-hidden bg-gray-200">
      <Sidebar panel={panel} mediumDev={mediumDev}/>
      <span className="mt-10 cursor-pointer" onClick={() =>{
        handlePanel();
        handleMediumDevice();
      }}>
        <img
          src={panel ? panel_right : panel_left}
          alt=""
          className="opacity-60 w-[22px]"
        />
      </span>
      <main className="flex-1 bg-gray-200 p-2 overflow-y-auto h-full">
        <div className="bg-white min-h-screen rounded-2xl p-2">
          <div className="space-y-6 p-5">
            <h2 className="text-2xl font-bold">Main Section</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Shop;
