import React from "react";
import AvailabilitySelector from "../components/AvailabilitySelector";

const Availability = () => {
  return (
    <div className="flex  flex-wrap border border-black ">
      <AvailabilitySelector day="Monday" />
      <AvailabilitySelector day="Tuesday" />
      <AvailabilitySelector day="Wednesday" />
      <AvailabilitySelector day="Thursday" />
      <AvailabilitySelector day="Friday" />
      <AvailabilitySelector day="Saturday" />
      <AvailabilitySelector day="Sunday" />
    </div>
  );
};

export default Availability;
