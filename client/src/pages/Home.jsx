import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Homepage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Login />
      <Signup />
    </div>
  );
};

export default Homepage;
