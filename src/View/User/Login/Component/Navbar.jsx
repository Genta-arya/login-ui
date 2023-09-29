import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const imageUrl =
    "https://portal.dinus.ac.id/assets/images/logo_dinus_new.png";
  const navbarStyle = {
    backgroundColor: "#1153A1",
    padding: "22px",
    position: "fixed",
    width: "100%",
    zIndex: "1000",
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const controls = useAnimation();

  useEffect(() => {
    const currentScrollPos = window.pageYOffset;

    const shouldShowNavbar =
      prevScrollPos > currentScrollPos || currentScrollPos === 0;

    controls.start({ y: shouldShowNavbar ? 0 : -100 });
  }, [prevScrollPos, controls]);

  return (
    <motion.nav
      style={{ ...navbarStyle }}
      initial={{ y: 0 }}
      animate={controls}
    >
      <div className="container mx-auto flex flex-col items-center md:flex-row md:items-end">
        <div className="md:ml-40">
          <a href="https://portal.dinus.ac.id/">
            {" "}
            <img src={imageUrl} alt="Logo" className="w-24 h-auto" />
          </a>
        </div>
        <h3 className="flex-1 text-[#FFC600] text-2xl md:text-3xl font-montserrat font-bold text-center md:mr-40 mb-2">
          PORTAL UDINUS
        </h3>
      </div>
    </motion.nav>
  );
};

export default Navbar;
