import React, { useEffect } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import Content from "./Component/Content";

function Home() {
  useEffect(() => {
    document.title = "Beranda";
  });

  return (
    <div className="">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
