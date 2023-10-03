import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faCircleInfo,
  faNewspaper,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import hamburger from "../../../../Asset/hamburger.png";
import { setSearchTerm } from "../../../../Helpers/Redux/searchAction";
import { connect, shallowEqual } from "react-redux";
import icon from "../../../../Asset/news.png";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Navbar({ searchTerm, setSearchTerm }) {
  const [sideBar, setSideBar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className=" flex justify-between px-12 max-md:px-4 bg-gray-900  py-3 w-screen ">
      <div className="flex gap-x-80 max-md:gap-x-4">
        <div className="lg:hidden  py-2 max-md:mt-2 cursor-pointer transition-all hover:scale-110 delay-75 px-4">
          <img
            src={hamburger}
            alt="icon"
            className="w-12 h-12 border border-white rounded-lg p-1"
            onClick={toggleSidebar}
          />
        </div>

        <Link to="/tailwind">
          <div className="max-[768px]:hidden max-[1023px]:hidden  px-12">
            {" "}
            <img
              src={icon}
              alt="icon"
              className="w-14 h-14 rounded-full border-4 border-purple-700"
            />
          </div>
        </Link>
      </div>

      <div className="flex gap-12 py-1">
        <div className="relative max-md:hidden py-1">
          {location.pathname !== "/tailwind" && (
            <div className="relative">
              <div className="absolute left-4 mt-2.5">
                <FontAwesomeIcon icon={faSearch} className="text-white" />
              </div>
              <input
                type="text"
                placeholder="Cari berita..."
                onChange={handleSearchChange}
                value={searchTerm}
                className="pl-10 border border-b-4 p-2 rounded-full w-auto placeholder:text-sm placeholder:font-montserrat bg-gray-700 placeholder:text-white text-white border-purple-600"
              />
            </div>
          )}
        </div>

        <div className="flex gap-4 py-2 ">
          {location.pathname !== "/news" && (
            <>
              <Link
                to="/news"
                className="max-md:hidden max-lg:hidden border border-slate-400 bg-gray-700 text-white p-1 rounded-lg border-b-4 w-20 text-center hover:scale-110 duration-100 hover:border-white"
              >
                Berita
              </Link>
              <Link
                to="#"
                className="max-md:hidden max-lg:hidden border border-slate-400 bg-gray-700 text-white p-1 rounded-lg border-b-4 w-20 text-center cursor-pointer hover:scale-110 duration-100 hover:border-white"
              >
                About
              </Link>
              <Link
                to="#"
                className="max-md:hidden max-lg:hidden border border-slate-400 bg-gray-700 text-white p-1 rounded-lg border-b-4 w-20 text-center cursor-pointer hover:scale-110 duration-100 hover:border-white"
              >
                Contact
              </Link>
            </>
          )}

          <div className="md:hidden px-2 ">
            {location.pathname !== "/tailwind" && (
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Cari berita..."
                  onChange={handleSearchChange}
                  value={searchTerm}
                  className=" max-md:w-36  pl-10 border border-b-4 p-2 rounded-full w-44  placeholder:text-sm placeholder:font-montserrat bg-gray-700 placeholder:text-white text-white border-purple-600"
                ></input>

                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-white absolute left-4 mt-3.5"
                ></FontAwesomeIcon>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* sidebar */}
      {sideBar && (
        <motion.div
          className="lg:hidden fixed left-0 top-0 h-screen w-56 bg-gray-800 z-40 "
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <ul className="pt-4">
            <FontAwesomeIcon
              icon={faClose}
              className="w-5 h-5 border border-white rounded-full p-1 m-4 text-white hover:border-b-4 hover:border-slate-400 "
              onClick={toggleSidebar}
            ></FontAwesomeIcon>

            <div className="flex justify-center py-4 mb-8 border-b-2 border-slate-400 ">
              <h1 className="text-white font-serif mb-2 border-white p-2 rounded-full border-b-4  ">
                My Berita
              </h1>
            </div>

            <div className="ml-5 border border-white items-center w-44 p-6 rounded-lg">
              <li className="flex justify-between">
                <Link
                  to="/tailwind"
                  className="text-white font-serif flex justify-between gap-4 mt-4 hover:bg-gray-700 rounded-full p-2 w-auto hover:border-b-4 hover:border-slate-400"
                >
                  <FontAwesomeIcon
                    icon={faHome}
                    size="1x"
                    className="mt-0.5"
                  ></FontAwesomeIcon>
                  <p>Home</p>
                </Link>
              </li>

              {location.pathname !== "/news" ? (
                <li className="flex justify-between ">
                  <Link
                    to="/news"
                    className="text-white font-serif flex justify-between gap-4 mt-4 hover:bg-gray-700 rounded-full p-2 w-auto hover:border-b-4 hover:border-slate-400"
                  >
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      size="1x"
                      className="mt-0.5"
                    ></FontAwesomeIcon>
                    <p>Berita</p>
                  </Link>
                </li>
              ) : (
                <li className="flex justify-between">
                  <div className="text-white font-serif flex justify-between gap-4 mt-4 bg-gray-700 rounded-full p-2 w-auto border-b-4 border-slate-400 cursor-not-allowed">
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      size="1x"
                      className="mt-0.5"
                    ></FontAwesomeIcon>
                    <p>Berita</p>
                  </div>
                </li>
              )}
            </div>
          </ul>
        </motion.div>
      )}

      {sideBar && (
        <div
          className="absolute left-auto right-0 top-0 inset-0 w-full bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchTerm: state.search.searchTerm,
});

export default connect(mapStateToProps, { setSearchTerm })(Navbar);
