import React from "react";
import {ShopContext} from "./ShopContext";
import { foods } from "../assets/data";
import { useNavigate } from "react-router-dom";

const ShopProvider = (props) => {
  const currency = "$"
  const deliveryCharges = 10
  const navigate = useNavigate()

  const value = {
    foods,
    currency,
    deliveryCharges,
    navigate,
     
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopProvider;
