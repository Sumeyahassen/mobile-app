import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function FiveStare() {
  const [rating, setRating] = useState(null);
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((star, index) => {
        const currentRat = index + 1;
        return (
          <button
            className=""
            key={index}
            onClick={() => setRating(currentRat)}
          >
            {currentRat<=rating ? <FaStar size={30} className="border-amber-200 border-2 border-solid  bg-yellow-500 " />:<FaStar size={30} className="border-amber-200 border-2 border-solid bg-gray-100" />}
          </button>
        );
      })}
      currnt rate:{rating}
    </div>
  );
}

export default FiveStare;
