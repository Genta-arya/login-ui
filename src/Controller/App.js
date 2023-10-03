import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import SplashScreen from "../View/Splash/Index";
import IndexLogin from "../View/User/Login/Index";
import DetailNotFound from "../View/404/Index";
import Home from "../View/User/Home/Index";
import IndexBelajar from "../View/User/Belajar/Index";
import Content from "../View/User/Belajar/Component/Content";
import News from "../View/User/Belajar/Component/News";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <SplashScreen />
      ) : (
        <Routes>
       
          <Route path="/" element={<Navigate to="/mahasiswa" />} />
  
          <Route path="/mahasiswa" element={<IndexLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<Content />} />
          <Route path="/news-query" element={<News />} />

          <Route path="/tailwind" element={<IndexBelajar />} />
     
          <Route path="*" element={<DetailNotFound />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
