import { Link } from "react-router-dom";

function Card({ shoe }) {
  return (
    <div className="w-[300px] h-[500px] bg-[#F3EDED] rounded-3xl ">
      <div className="flex justify-center mt-10">
        <img src={shoe.imageURL} alt="" className="w-[170px] rounded-2xl" />
      </div>

      <div className="ml-6 mt-10 mb-17">
        <h2>Nike </h2>
        <h4>{shoe.model}</h4>
        <h4>{shoe.price}</h4>
      </div>

      <div className="flex justify-between mx-6">
        <p>⭐️</p>
        <Link>
          <p>View Details</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
