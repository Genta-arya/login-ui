import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faMapMarkerAlt,
  faPhone,
  faUser,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import categories from "../../../../Model/Service/Product";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const itemsPerPage = 5;

  const toggleDropdownKatalog = () => {
    setShowSkeleton(true);

    setDropdownOpen(!dropdownOpen);

    setTimeout(() => {
      setShowSkeleton(false);
    }, 3000);
  };

  const toggleDropdownMenu1 = () => {};

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const onPrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setShowSkeleton(true);

      setTimeout(() => {
        setShowSkeleton(false);
      }, 2000);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const getRandomImageURL = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    return `https://picsum.photos/id/${randomId}/200/300`;
  };

  return (
    <nav className="bg-white text-black p-5 flex justify-between items-center drop-shadow-2xl shadow-2xl w-screen">
      <div className="flex items-center space-x-4">
        <div className="relative group mb-3">
          <span className="text-3xl font-extrabold mr-12 ml-5">Design Hanif</span>
          <button
            onClick={toggleDropdownKatalog}
            className="ml-2 text-white focus:outline-none mr-5"
          >
            <p className="font-bold text-red-600 text-lg">
              Katalog
              <FontAwesomeIcon
                icon={faChevronDown}
                color="black"
                className="ml-2"
              />
            </p>
          </button>

          <button className="ml-2 text-white focus:outline-none mr-5">
            <p className="font-bold text-black text-lg">
              Ide-ide
              <FontAwesomeIcon
                icon={faChevronDown}
                color="black"
                className="ml-2"
              />
            </p>
          </button>

          <button className="ml-2 text-white focus:outline-none mr-20">
            <p className="font-bold text-black text-lg">
              Pilih Kamar
              <FontAwesomeIcon
                icon={faChevronDown}
                color="black"
                className="ml-2"
              />
            </p>
          </button>

          {dropdownOpen && (
            <div className="absolute  bg-white w-screen p-12 text-gray-800 shadow-lg -ml-5 mt-7 border-t-2 border-black rounded-b-lg">
              <div className="flex items-center justify-between ">
                <button
                  onClick={onPrevClick}
                  className={`text-gray-600 hover:text-gray-800 ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={currentPage === 1}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="flex flex-row space-x-4 mt-5 ">
                  {showSkeleton
                    ? Array.from({ length: itemsPerPage }).map((_, index) => (
                        <div
                          key={index}
                          className="flex items-center py-2 px-4"
                        >
                          <div className="animate-pulse w-24 h-24 bg-gray-300 rounded-xl"></div>
                          <div className="ml-3">
                            <div className="animate-pulse bg-gray-300 w-14 h-4"></div>
                            <div className="animate-pulse bg-gray-300 w-20 h-4 mt-2"></div>
                          </div>
                        </div>
                      ))
                    : categories
                        .slice(startIndex, endIndex)
                        .map((category, index) => (
                          <div
                            className="flex items-center py-2 px-4 m-4"
                            key={index}
                          >
                            <a
                              href="#"
                              className="w-24 h-24 relative mr-4 hover:scale-110 transition-all delay-75 "
                            >
                              <img
                                src={getRandomImageURL()}
                                alt={`Gambar ${category}`}
                                className="w-24 h-24 rounded-xl border-2 border-black shadow-2xl shadow-gray-900"
                              />
                            </a>

                            <div className=" text-lg font-semibold ml-3 mr-3 ">
                              {category}
                            </div>
                          </div>
                        ))}
                </div>
                <button
                  onClick={onNextClick}
                  className={`text-gray-600 hover:text-gray-800 ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={currentPage === totalPages}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>

              <div className="text-center mt-2 ">
                {totalPages > 1 ? (
                  <div>
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faCircle}
                        className={`mr-2 mt-5 ${
                          index + 1 === currentPage
                            ? "text-red-600"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow  justify-end">
        <div className="relative">
          <div className="absolute left-2 top-2">
            <FontAwesomeIcon icon={faSearch} className="ml-4" />
          </div>
          <input
            type="text"
            placeholder="Saya ingin mencari..."
            className="   w-2/3 pl-12 placeholder-black bg-gray-300 text-black border rounded-2xl py-2 px-3 focus:outline-none focus:border-black"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 gap-4 mr-8">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className=" text-red-600" />
          <span>Semarang</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
          <span>089618601344</span>
        </div>

        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faUser}
            className="text-gray-600 transition-colors hover:text-red-600 cursor-pointer"
          />
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-gray-600 transition-colors hover:text-red-600 cursor-pointer"
          />
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-gray-600 transition-colors hover:text-red-600 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
