import React, { useState } from "react";

const Menu = ({
  categories,
  selectedCategory,
  onCategoryChange,
  countries,
  selectedCountry,
  onCountryChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCountry, setIsOpenCountry] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuCountry = () => {
    setIsOpenCountry(!isOpenCountry);
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    toggleMenu();
  };

  const handleCountryClick = (country) => {
    onCountryChange(country);
  };

  return (
    <div className="menu-container max-md:flex max-md:justify-center mt-5 px-8">
      <div className={`dropdown  dropdown-hover ${isOpen ? "open" : ""}`}>
        <label
          tabIndex={0}
          className="btn m-1 bg-white  drop-shadow-2xl shadow-2xl border-slate-500 rounded-full border-b-8 hover:border-purple-700"
          onClick={toggleMenu}
        >
          Kategori: {selectedCategory}
        </label>
        <ul
          tabIndex={0}
          className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ${
            isOpen ? "block max-h-40 overflow-y-auto" : "hidden"
          }`}
        >
          {categories.map((category, index) => (
            <li key={index}>
              <a onClick={() => handleCategoryClick(category)}>{category}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`dropdown dropdown-hover ${isOpenCountry ? "open" : ""}`}>
        <label
          tabIndex={0}
          className="btn m-1 bg-white drop-shadow-2xl  shadow-2xl border-slate-500 rounded-full border-b-8 hover:border-purple-700"
          onClick={toggleMenuCountry}
        >
          Negara: {selectedCountry}
        </label>
        <ul
          tabIndex={0}
          className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28 text-center ${
            isOpenCountry ? "open" : ""
          }`}
        >
          {countries.map((country, index) => (
            <li key={index} className="">
              <a onClick={() => handleCountryClick(country.code)} className="">
                {country.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
