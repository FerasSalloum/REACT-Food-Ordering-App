import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../components/Title";
import { FaMinus, FaPlus, FaRegWindowClose } from "react-icons/fa";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { foods, cartItem, currency, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [quantites, setQuantites] = useState({});
  useEffect(() => {
    if (foods.length > 0) {
      const tempData = [];
      const initalQuantities = {};
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItem[items][item],
            });
            initalQuantities[`${items}-${item}`] = cartItem[items][item];
          }
        }
      }
      setCartData(tempData);
      setQuantites(initalQuantities);
    }
  }, [cartItem, foods]);

  const increment = (id, size) => {
    const key = `${id}-${size}`;
    const newValue = quantites[key] + 1;
    setQuantites((prev) => ({ ...prev, [key]: newValue }));
    updateQuantity(id, size, newValue);
  };
  const decrement = (id, size) => {
    const key = `${id}-${size}`;
    if (quantites[key] > 1) {
      const newValue = quantites[key] - 1;
      setQuantites((prev) => ({ ...prev, [key]: newValue }));
      updateQuantity(id, size, newValue);
    }
  };
  return (
    <section className="max-padd-container mt-24">
      <div className="pt-6">
        <Title
          title1={"CART"}
          title2={"LIST"}
          titleStyle={"h3 "}
          paraStyle={"hidden"}
        />
        {/* contaner */}
        <div>
          {cartData.map((item, i) => {
            console.log(cartData);
            const productData = foods.find(
              (product) => product._id == item._id
            );
            const key = `${item._id}-${item.size}`;
            return (
              <div key={i} className="p-2 rounded-xl bg-deep mt-2">
                <div className="flex items-center gap-x-3">
                  <div className="flex items-start gap-6 p-2 bg-light rounded-xl">
                    <img
                      src={productData.image}
                      alt=""
                      className="w-14 sm:w-16"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flexBetween">
                      <h5 className="h5 !my-0 line-clamp-1">
                        {productData.name}
                      </h5>
                      <FaRegWindowClose
                        className="cursor-pointer "
                        onClick={()=>updateQuantity(item._id, item.size, 0)}
                      />
                    </div>
                    <p className="bold-14 m-0.5 ">{item.size}</p>
                    <div className="flexBetween">
                      <div className="flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary">
                        <button
                          className="p-1.5 text-white bg-secondary rounded-full shadow-md"
                          onClick={() => decrement(item._id, item.size)}
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <p className="min-w-8 text-center px-2">
                          {quantites[key]}
                        </p>
                        <button
                          className="p-1.5 text-white bg-secondary rounded-full shadow-md"
                          onClick={() => increment(item._id, item.size)}
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                      <h4 className="h4">
                        {currency}
                        {productData.price[item.size] * quantites[key]}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* CartTotal */}
        <div className="flex my-20">
          <div className="w-full sm-w[450px]">
            <CartTotal />
            <button
              onClick={() => navigate("/placeOrder")}
              className="btn-secondary mt-7"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
