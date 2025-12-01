import { useLocation, Link } from "react-router-dom";

import { useState } from "react";

function Product_Detail() {
  const location = useLocation();

  // We try to access the 'shoe' data passed from Card.jsx
  const { shoe } = location.state || {};

  if (!shoe) {
    // Safety check: If someone goes to this URL directly without clicking a card,
    // shoe will be undefined. We handle that case.
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl">No Product Found</h1>
        <Link to="/" className="text-blue-500 underline mt-4">
          Go back to Shop
        </Link>
      </div>
    );
  }

  // Inside Product_Detail function...

  return (
    <main className="h-screen bg-white">
      {/* Add a back button for better UX */}
      <div className="p-10">
        <Link to="/shop" className="text-gray-500 hover:text-black">
          ← Back to Shop
        </Link>
      </div>

      <div className="flex items-center justify-center gap-50">
        {/* Left Side: Image */}
        <div className="">
          <img
            src={shoe.imageURL}
            alt={shoe.model}
            className="w-[400px] rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side: Details */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-2">{shoe.model}</h1>
          <h2 className="text-2xl text-gray-600 mb-6">{shoe.price}</h2>

          <div className="font-inter opacity-75 text-lg leading-relaxed">
            {/* 
                If your MongoDB data has a 'description' field, use shoe.description.
                If not, I added a fallback text below.
             */}
            <p>
              {shoe.description
                ? shoe.description
                : `The ${shoe.model} features a timeless design made for comfort and style. Perfect for everyday wear or hitting the court.`}
            </p>
          </div>

          <button className="mt-10 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition mr-2">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default Product_Detail;
