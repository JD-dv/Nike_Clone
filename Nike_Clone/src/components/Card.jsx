import sport_green_shoe from "../assets/images/sport_green_shoe.png";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="w-[300px] h-[400px] bg-[#F3EDED] rounded-[24px] ">
      <div className="flex justify-center mt-10">
        <img
          src={sport_green_shoe}
          alt=""
          className="w-[260px] rounded-[16px]"
        />
      </div>

      <div className="ml-6 mt-10 mb-17">
        <h2>Nike </h2>
        <h4>Vomero 5</h4>
        <h4>PHP 5,000.00</h4>
      </div>

      <div className="flex justify-between mx-6">
        <p>star</p>
        <Link>
        <p>View Details</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
