import { motion } from "framer-motion";
import React from "react";

const Faq = () => {
  const kategori = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const country = [
    "Indonesia",
    "Malaysia",
    
  ];

  return (
    <motion.div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-base-200 mb-4"
    >
      <motion.div className="collapse-title text-md font-medium text-left  ">
        Berita yang disajikan apa saja?
      </motion.div>

      <div className="collapse-content">
        <p className="text-left">
          Ada beragam macam jenis kategori berita yaitu:
        </p>
        <div className="grid grid-cols-1">
          {kategori.map((category, index) => (
            <p className="text-left" key={index}>
              {index + 1}. {category}
            </p>
          ))}
        </div>
      </div>

      <motion.div tabIndex={0} className="collapse collapse-arrow   mb-4 ">
        <motion.div className="collapse-title text-md font-medium text-left">
          Berita yang disajikan dari negara mana ?
        </motion.div>

        <div className="collapse-content">
          <p className="text-left">
            Ada beragam macam jenis kategori berita yaitu:
          </p>
          <div className="grid grid-cols-1">
            {country.map((category, index) => (
              <p className="text-left" key={index}>
                {index + 1}. {category}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Faq;
