import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) navigate("/login");
  }, []);

  return (
    <>
      <Header />
      <Products />
      <Footer/>
    </>
  );
};

export default Home;
