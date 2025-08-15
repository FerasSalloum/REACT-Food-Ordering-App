import React, { useState } from "react";
import { ShopContext } from "./ShopContext";
import { foods } from "../assets/data";
import { useNavigate } from "react-router-dom";

const ShopProvider = (props) => {
  const currency = "$";
  const deliveryCharges = 10;
  const navigate = useNavigate();
  const [cartItem, setCatItem] = useState({});
  // add items to cart
  const addItemToCart = (itemId, size) => {
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else cartData[itemId][size] = 1;
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCatItem(cartData);
  };

  // caount of cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    setCatItem(cartData);
  };
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      let filterd = foods.find((food) => food._id == items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += filterd.price[item] * cartItem[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };
  const value = {
    foods,
    currency,
    deliveryCharges,
    cartItem,
    navigate,
    addItemToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopProvider;
