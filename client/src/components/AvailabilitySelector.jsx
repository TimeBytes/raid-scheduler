import React, { useState } from "react";

const AvailabilitySelector = (props) => {
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [isAvailableWholeDay, setIsAvailableWholeDay] = useState(false);

  const handleCheckboxNotAvailableChange = () => {
    setIsNotAvailable(!isNotAvailable);
    setIsAvailableWholeDay(false);
  };

  const handleCheckboxAvailableWholeDayChange = () => {
    setIsAvailableWholeDay(!isAvailableWholeDay);
    setIsNotAvailable(false);
  };

  return (
    <div className="border border-black m-2 w-1/6">
      <div className="p-2 m-2">
        <h1 className="text-center">{props.day}</h1>
        <div className="flex p-2">
          <h1 className="w-1/2 text-center">Start Time</h1>
          <h1 className="w-1/2 text-center">End Time</h1>
        </div>
        {/* Show time selectors only if not marked as not available and not available whole day */}
        {!isNotAvailable && !isAvailableWholeDay && (
          <div className="flex">
            <div className="flex justify-center w-1/2 mb-2">
              <input
                type="time"
                value={"00:00"}
                className="p-1 border border-black rounded-lg text-sm text-center"
              ></input>
            </div>
            <div className="flex justify-center w-1/2 mb-2">
              <input
                type="time"
                value={"23:59"}
                className="p-1 border border-black rounded-lg text-sm text-center"
              ></input>
            </div>
          </div>
        )}
        {!isAvailableWholeDay && (
          <div className="flex justify-between">
            <label>Not Available</label>
            <input
              type="checkbox"
              onChange={handleCheckboxNotAvailableChange}
              checked={isNotAvailable}
            ></input>
          </div>
        )}
        {!isNotAvailable && (
          <div className="flex justify-between">
            <label>Available Whole Day</label>
            <input
              type="checkbox"
              onChange={handleCheckboxAvailableWholeDayChange}
              checked={isAvailableWholeDay}
            ></input>
          </div>
        )}
        <div className="flex justify-center">
          <button className="bg-black text-white border border-black rounded-lg px-2 py-1 mt-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailabilitySelector;
