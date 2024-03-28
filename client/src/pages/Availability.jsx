import React from "react";
import AvailabilitySelector from "../components/AvailabilitySelector";
import Navbar from "../components/Navbar";

const Availability = () => {
  return (
    <div>
      <Navbar />
      <section className="flex  flex-wrap border border-black ">
        <AvailabilitySelector day="Monday" />
        <AvailabilitySelector day="Tuesday" />
        <AvailabilitySelector day="Wednesday" />
        <AvailabilitySelector day="Thursday" />
        <AvailabilitySelector day="Friday" />
        <AvailabilitySelector day="Saturday" />
        <AvailabilitySelector day="Sunday" />
        <AvailabilitySelector day="Holiday" />
      </section>
    </div>
  );
};

export default Availability;
