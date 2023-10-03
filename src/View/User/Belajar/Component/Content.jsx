import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from "./Menu";
import Footer from "./Footer";

import { useNewsQuery } from "../../../../Helpers/ReactQuery/useFetchNews";
import { getNews, getRandomImageURL } from "../../../../Model/Service/Api";

const ContentPage = ({ searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState("business");
  const [selectedCountry, setSelectedCountry] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const itemsPerPage = 6;

  useEffect(() => {
    document.title = `BeritaKu  || ${selectedCategory}`;
  });

  useEffect(() => {
    console.log(selectedCountry);
  }, [selectedCountry]);

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const countries = [
    { code: "id", name: "Indonesia" },
    { code: "my", name: "Malaysia" },
  ];

  const handleCategoryChange = (categorys) => {
    setSelectedCategory(categorys);
  };

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
  };

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedCategory}&apiKey=3c3fec3ba03344b4990ba080b3a0e99b`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }

        const data = await response.json();
        const filteredData = data.articles.filter((article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const newsDataWithImages = filteredData.map((item) => ({
          ...item,
          imageURL: getRandomImageURL(),
        }));
        const reversedNewsData = newsDataWithImages.reverse();
        setNewsData(reversedNewsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [searchTerm, selectedCategory, selectedCountry]);

  // const { data: newsData, isLoading } = useNewsQuery(
  //   searchTerm,
  //   selectedCategory,
  //   selectedCountry
  // );

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return newsData.slice(startIndex, endIndex);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(newsData.length / itemsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main>
      <div className="w-screen">
        <Navbar />
      </div>

      <div className="max-[768px]:hidden md:block  ">
        {isLoading ? (
          <div className="flex justify-center items-center bg-white h-screen">
            <ul className="animate-pulse grid grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <li
                  key={index}
                  className="bg-gray-300 h-20 w-40 max-md:w-20 mb-4 p-2"
                ></li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <div className="mt-12 md:flex  md:justify-center">
              <Menu
                countries={countries}
                categories={categories}
                selectedCategory={selectedCategory}
                selectedCountry={selectedCountry}
                onCategoryChange={handleCategoryChange}
                onCountryChange={handleCountryChange}
              />
            </div>
            {newsData.length > 0 ? (
              <div className="items-center justify-center flex py-4 mt-4 p-12 max-md:p-6">
                <ul className="grid grid-cols-3 gap-8 max-md:grid-cols-1 ">
                  {getPageData().map((item, index) => (
                    <div
                      key={index}
                      className="  drop-shadow-2xl shadow-2xl shadow-gray-800 bg-white p-4 text-center relative transition-transform transform hover:scale-105 rounded-2xl cursor-pointer border-slate-400 border-b-8 border hover:border-purple-400 hover:text-purple-800"
                    >
                      {index === 0 && (
                        <div className="flex justify-end">
                          <span className="  indicator-item badge badge-secondary badge-md">
                            Hot news
                          </span>
                        </div>
                      )}
                      <img
                        src={item.imageURL}
                        alt={`Image ${index + 1}`}
                        className="mt-4 mx-auto rounded-lg mb-5 bg-cover"
                      />
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{item.author}</p>
                    </div>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center mt-12">
                <p>Berita tidak ditemukan</p>
              </div>
            )}
            <div className="flex justify-center py-4 p-4">
              <div className="join">
                <button className="join-item btn" onClick={handlePreviousPage}>
                  «
                </button>
                <button className="join-item btn">{currentPage}</button>
                <button className="join-item btn" onClick={handleNextPage}>
                  »
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="lg:hidden flex justify-center p-4">
        <div className="grid grid-cols-1 w-screen ">
          <div className="mb-4">
            <Menu
              countries={countries}
              categories={categories}
              selectedCategory={selectedCategory}
              selectedCountry={selectedCountry}
              onCategoryChange={handleCategoryChange}
              onCountryChange={handleCountryChange}
            />
          </div>

          {isLoading ? (
            <div className="flex justify-center w-screen   mt-4">
              <ul className="animate-pulse grid grid-cols-3 gap-8">
                {[1, 2, 3].map((index) => (
                  <li
                    key={index}
                    className="bg-gray-300 h-20 w-40 max-md:w-20 mb-4 p-5"
                  ></li>
                ))}
              </ul>
            </div>
          ) : (
            newsData.length > 0 && (
              <Slider {...carouselSettings} className="">
                {newsData.map((item, index) => (
                  <div
                    key={index}
                    className="  bg-white  p-3 text-center relative transition-transform transform hover:scale-105 rounded-2xl cursor-pointer border-slate-400 border-b-8 border hover:border-purple-400 hover:text-purple-800"
                  >
                    {index === 0 && (
                      <span className="indicator-item badge badge-primary">
                        new
                      </span>
                    )}
                    <img
                      src={item.imageURL}
                      alt={`Image ${index + 1}`}
                      className="mt-4 mx-auto rounded-lg mb-5"
                    />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.author}</p>
                  </div>
                ))}
              </Slider>
            )
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

const mapStateToProps = (state) => ({
  searchTerm: state.search.searchTerm,
});

export default connect(mapStateToProps)(ContentPage);
