import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const url_image = "https://portal.dinus.ac.id/assets/images/bg.jpeg";
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    document.title = "Halaman Login Siadin Mahasiswa";
  });

  return (
    <header
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${url_image})`,
        position: "relative",
        height: "50vh",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          zIndex: "1",
          background: "#07294d none repeat scroll 0 0",
          opacity: "0.8",
        }}
        data-overlay
      ></div>
      <div className="container mx-auto relative flex flex-col items-start justify-center h-full text-white pl-5 md:pl-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 relative z-10 mt-32 md:mt-16 ">
          <a className="text-white font-sans" onClick={goToHome}>
            Login
          </a>
        </h1>
        <p className="text-xl md:text-lg font-roboto font-semibold relative z-10 mt-3">
          <a href="https://portal.dinus.ac.id/">
            {" "}
            <span className="cursor-pointer" onClick={goToHome}>
              Home /{" "}
            </span>
          </a>
          <span className=" text-xl ont-roboto text-[#FFC600]">
            Halaman Login Siadin Mahasiswa{" "}
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
