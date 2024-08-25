import React from "react";
import MainCarousel from "../../components/homecarousel/MainCarousel";
import HomeSectionCarousel from "../../components/homesectioncarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel sectionName="Men's Shirts" />
        <HomeSectionCarousel sectionName="Men's Shoes" />
        <HomeSectionCarousel sectionName="Saree" />
      </div>
    </div>
  );
};

export default HomePage;
