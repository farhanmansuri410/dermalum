import React from "react";
import ProductHero from "../components/ProductHero";
import ProductSection from "../components/ProductSection";

export default function Product() {
  return (
    <div className="p-6">
      <ProductHero />
      <ProductSection/>
    </div>
  );
}
