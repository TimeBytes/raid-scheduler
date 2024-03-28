import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Signup from "../components/Signup";
import CharacerSelector from "../components/CharacterSelector";
import PartySelector from "../components/PartySelector";
const Homepage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Login />
      <Signup />
      <CharacerSelector />
      <PartySelector />
    </div>
  );
};

export default Homepage;
