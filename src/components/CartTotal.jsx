import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, deliveryCharges, getCartAmount } = useContext(ShopContext);
  return (
    <div>
      <Title
        title1={"CART"}
        title2={"TOTAL"}
        titleStyle={"h3"}
        paraStyle={"hidden"}
      />
      <div className="flexBetween pt-3">
        <h5 className="h5">subtotal: </h5>
        <p className="h5">
          {currency}
          {getCartAmount()}.00
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
      <div className="flexBetween pt-3">
        <h5 className="h5">Sipping Fee:</h5>
        <p className="h5">
          {getCartAmount() === 0 ? "0.00" : `${currency}${deliveryCharges}.00`}
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
      <div className="flexBetween pt-3">
        <h5 className="h5">Total:</h5>
        <p className="h5">
          {currency}{getCartAmount() === 0 ? "0.00" : `${getCartAmount() + deliveryCharges}.00`}
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />

    </div>
  );
};

export default CartTotal;
