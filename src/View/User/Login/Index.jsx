import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import Login from "./Component/LoginPage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ContactUs from "./Component/ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const IndexLogin = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="">
      <Navbar />
      <Header />
      <Login />
      <ContactUs />
      <Footer />

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-white p-12 rounded-lg">
            <button
              className="absolute top-0 right-0 m-3 text-gray-500 hover:text-red-500 cursor-pointer"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Alert</h2>
            <p className="mb-4">
              Halaman ini adalah contoh tampilan login yang telah di-clone.
            </p>

            <a
              href="https://portal.dinus.ac.id/mahasiswa"
              className="bg-[#ffc600]  text-[#07294d] font-bold py-2 px-4 w-40    mt-12 rounded hover:bg-[#07294d] hover:text-[#ffc600]  transition-all duration-300 delay-75 font-sans"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndexLogin;
