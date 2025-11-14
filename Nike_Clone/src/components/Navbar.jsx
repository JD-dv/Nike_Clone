import { Link } from "react-router-dom";
import Shop from "../pages/Shop.jsx"

function Navbar(){
    return(
        <>
        <span className="space-x-6 sm:space-x-10 xl:space-x-56 max-sm:text-[25px]">
            <a>Home</a>
            <Link to="/shop">Shop</Link>
            <a>Service</a>
        </span>
        </>
    )
}

export default Navbar;