import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContectUs";
import Footer from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
