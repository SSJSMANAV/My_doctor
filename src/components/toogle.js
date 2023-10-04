import React from "react";
import { useState } from "react";

function Toogle() {
  const [state, changeColorState] = useState(true);

  const changeColor = () => {
    if (state) {
      changeColorState(false);
    } else {
      changeColorState(true);
    }
  };

  return (
    <div className="bg-gray-700 p-2">
      <button
        onClick={changeColor}
        className={`p-4 px-7     font-semibold transition-all duration-300 ${
          !state ? "bg-blue-600" : "bg-gray-100"
        }`}
      >
        i
      </button>
      <button
        onClick={changeColor}
        className={`p-4 px-7  ml-2   font-semibold transition-all duration-300 ${
          state ? "bg-blue-600" : "bg-gray-100"
        } `}
      >
        i
      </button>
    </div>
  );
}
export default Toogle;
