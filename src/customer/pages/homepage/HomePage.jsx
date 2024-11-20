import React, { useEffect, useState } from "react";
import MainCarousel from "../../components/homecarousel/MainCarousel";
import HomeSectionCarousel from "../../components/homesectioncarousel/HomeSectionCarousel";
import { useSelector } from "react-redux";
import { api } from "../../../config/ApiConfig";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get(`api/admin/products/`);
        setProducts(response.data); // Assuming `response.data` contains the products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const mensHoodies = products.filter((product) => {
    return product.category.name === "Hoodies";
  });

  const mensShoes = products.filter((product) => {
    return product.category.name === "Shoes";
  });

  const womensSarees = products.filter((product) => {
    return product.category.name === "Dresses";
  });

  return (
    <div>
      <MainCarousel />
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel
          sectionName="Men's Hoodies"
          products={mensHoodies}
        />
        <HomeSectionCarousel sectionName="Men's Shoes" products={mensShoes} />
        <HomeSectionCarousel
          sectionName="Women's Dresses"
          products={womensSarees}
        />
      </div>
    </div>
  );
};

export default HomePage;
