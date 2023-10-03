import React, { useRef } from "react";
import Header from "./Component/Header";
import Landingpage from "./Component/Landingpage";
import Footer from "./Component/Footer";



const IndexBelajar = () => {
  const landingpageRef = useRef(null);

  return (
    <main className="bg-white">
      <Header  />
      <Landingpage  />
      <Footer />
   
    </main>
  );
};

export default IndexBelajar;
