import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Data Login:", userData);
  };

  return (
    <div className="-mt-14 min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white p-14 rounded-lg shadow-2xl w-full max-w-2xl h-max  drop-shadow-2xl ">
        <h2 className="text-3xl mb-10 mt-2 font-bold">SIADIN LOGIN!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 border-t-2">
            <div className="mt-4">
              <label htmlFor="email" className="block text-gray-600"></label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="NIM"
                value={userData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#1153A1] rounded-md"
                required
                disabled
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleInputChange}
              className="w-full p-2 border border-[#1153A1] rounded-md"
              required
              disabled
            />
          </div>
          <div className="text-left mb-8 mt-8">
            <p className="text-[#07294d] text-base font-bold mb-2  transition-all duration-300 delay-75">
              <span className="hover:text-[#ffc600] cursor-pointer">
                SiAdin Activation/Reset Link{" "}
              </span>
              <span className="text-gray-500 cursor-default">
                (Aktivasi/Reset/Lupa Password)
              </span>
            </p>

            <p className="text-[#07294d]  text-base font-bold hover:text-[#ffc600] cursor-pointer transition-all duration-300 delay-75">
              Siadin Activation/Reset Tutorial
            </p>
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-[#ffc600]  text-[#07294d] font-bold py-2 px-4 w-40  h-12 rounded hover:bg-[#07294d] hover:text-[#ffc600]  transition-all duration-300 delay-75 font-sans"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
