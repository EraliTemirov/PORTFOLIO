import React from "react";
import CartList from "../Components/CartList";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Cart = () => {
  return (
    <div className="a">
      <Header />
      <div className="corzinka_card"> 
      <CartList />
      </div>
      <div className=" m">
      <Footer/>
      </div>
    </div>
  );
};

export default Cart;
