import React from "react";

const PartySelector = () => {
  return (
    <div className="border border-black text-center m-3 w-1/2 p-2">
      <h2>Party Name: Placeholder</h2>

      <div className="flex justify-center">
        <h2>Status: Pending waiting for member's Availability</h2>
      </div>
      <div className="flex flex-col">
        <h2>Date:</h2>
        <h2>Time:</h2>
        <h2>Timezone</h2>
      </div>
    </div>
  );
};

export default PartySelector;
