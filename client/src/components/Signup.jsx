import React from "react";
import { useState, useEffect, input } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex justify-center my-5">
      <form className="flex flex-col justify-center border-2 border-black rounded-lg py-3">
        <h1 className="text-4xl m-auto mb-3">Sign Up</h1>
        <label htmlFor="username" className="px-3">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          className="m-3 mx-5 border-black rounded-xl border-2 p-2 hover:bg-gray-300 hover:text-black"
        />
        <label htmlFor="email" className="px-3">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="m-3 mx-5 border-black rounded-xl border-2 p-2 hover:bg-gray-300 hover:text-black"
        />
        <label htmlFor="password" className="px-3">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="m-3 mx-5 border-black rounded-xl border-2 p-2 hover:bg-gray-300 hover:text-black"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="m-3 mx-auto px-5 bg-blue-500 text-white border-black rounded-xl border-2 p-2 hover:bg-gray-300 hover:text-black"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
