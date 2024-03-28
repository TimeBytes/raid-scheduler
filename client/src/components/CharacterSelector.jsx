import React from "react";

const CharacterSelector = () => {
  return (
    <div className="border border-black text-center m-3 w-1/2 p-2">
      <h2>IGN: Placeholder</h2>

      <div className="flex justify-center">
        <h2>Availability:</h2>
        <p>placeholder</p>
        <button className="border border-black rounded-lg px-2 ml-3">
          Edit
        </button>
      </div>
      <div className="flex justify-center">
        <h2>Party:</h2>
        <p>placeholder</p>
        <button className="border border-black rounded-lg px-2 ml-3">
          Edit
        </button>
      </div>
    </div>
  );
};

export default CharacterSelector;
