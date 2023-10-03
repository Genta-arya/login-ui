import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import Faq from "./Faq";

const Landingpage = () => {
  const controls = useAnimation();

  const checkInView = async () => {
    const isInView = await controls.start("visible");
    if (isInView) {
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      id="landingpage"
      className="py-16 bg-gray-100"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      onViewportEnter={checkInView}
    >
      {/* desktop */}
      <div className="container mx-auto text-center bg-white rounded-xl p-7 w-auto max-md:hidden max-[1023px]:hidden">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4 font-serif"
          variants={scaleIn}
        >
          Tentang Kami
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-8 font-serif"
          variants={scaleIn}
        >
          Portal Berita Kami bertujuan untuk menjadi sumber utama informasi
          terkini dan terpercaya. Kami berkomitmen untuk:
        </motion.p>
        <motion.div className="flex justify-center mb-8" variants={scaleIn}>
          <motion.ul className="flex justify-center p-12 ">
            <div className="grid grid-cols-2 px-12 gap-12">
              <div className="flex  ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-1 mr-4 flex"
                />
                <p className="items-center text-justify font-serif">
                  Menyajikan berita terbaru.
                </p>
              </div>

              <div className="flex">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-1 mr-4 flex"
                />
                <p className="items-center text-justify font-serif ">
                  Memberikan informasi yang relevan dan akurat kepada pembaca
                  kami.
                </p>
              </div>

              <div className="flex">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-1 mr-4 flex"
                />
                <p className="items-center text-justify font-serif ">
                  Mengedepankan jurnalisme yang independen dan berkualitas.
                </p>
              </div>

              <div className="flex">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-1 mr-4 flex"
                />
                <p className="items-center text-justify font-serif ">
                  Membantu Anda tetap terinformasi dalam era informasi yang
                  cepat berubah.
                </p>
              </div>
            </div>
          </motion.ul>
        </motion.div>

        <div className="font-semibold font-montserrat text-2xl mb-4">F&Q</div>

        <div>
          <Faq />
        </div>
        <motion.p
          className="text-lg text-gray-600 mb-8 font-serif"
          variants={scaleIn}
        >
          Bersama-sama, mari kita menjelajahi dunia melalui berita dan informasi
          yang bermanfaat.
        </motion.p>
        <Link to="/news">
          <motion.button
            className="bg-blue-500 font-serif hover:bg-blue-800 border-b-8 border-slate-500 hover:border-black text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            variants={scaleIn}
          >
            Cari Berita
          </motion.button>
        </Link>
      </div>

      {/* mobile 768px*/}

      <div className=" text-center p-7 bg-white lg:hidden">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4 font-serif py-2"
          variants={scaleIn}
        >
          Tentang Kami
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-8 font-serif"
          variants={scaleIn}
        >
          Portal Berita Kami bertujuan untuk menjadi sumber utama informasi
          terkini dan terpercaya. Kami berkomitmen untuk:
        </motion.p>
        <motion.div className="flex justify-center" variants={scaleIn}>
          <motion.ul className="">
            <motion.li className="mb-2 grid grid-cols-1 font-serif gap-4 p-8 ">
              <div className="flex ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-1 mr-4 flex"
                />
                <p className="items-center text-justify ">
                  Menyajikan berita terbaru.
                </p>
              </div>

              <div className="flex">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-1 mr-4 flex"
                />
                <p className="items-center text-justify ">
                  Memberikan informasi yang relevan dan akurat kepada pembaca
                  kami.
                </p>
              </div>

              <div className="flex">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-1 mr-4 flex"
                />
                <p className="items-center text-justify ">
                  Mengedepankan jurnalisme yang independen dan berkualitas.
                </p>
              </div>

              <div className="flex">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mt-1 mr-4 flex"
                />
                <p className="items-center text-justify ">
                  Membantu Anda tetap terinformasi dalam era informasi yang
                  cepat berubah.
                </p>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>

        <div className="font-semibold font-montserrat text-2xl mb-4">F&Q</div>
        <Faq />

        <motion.p
          className="text-lg text-gray-600 mb-8 font-serif"
          variants={scaleIn}
        >
          Bersama-sama, mari kita menjelajahi dunia melalui berita dan informasi
          yang bermanfaat.
        </motion.p>

        <Link to="/news">
          <motion.button
            className="bg-blue-500 font-serif hover:bg-blue-800 border-b-8 border-slate-500 hover:border-black text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            variants={scaleIn}
          >
            Cari Berita
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Landingpage;
