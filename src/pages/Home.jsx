import React from "react";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import ProductRange from "../components/ProductRange";
import IngredientsSection from "../components/IngredientsSection";

export default function Home() {
  return <div className="p-6">
    
    <Hero/>
    <WhyChoose/>
    <ProductRange/>
    <IngredientsSection/>
    </div>;
}
