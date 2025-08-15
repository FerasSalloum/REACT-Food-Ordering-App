import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { RiShoppingBagLine, RiUserLine } from "react-icons/ri";
import { TbUserCircle, TbArrowRight } from "react-icons/tb";
import { CgMenuLeft } from "react-icons/cg";
import { useState } from "react";
import ShopProvider from "../Context/ShopProvider";
import { ShopContext } from "../Context/ShopContext";
const Header = () => {
  const [menOpend, setMenOpend] = useState(false);
  const { getCartCount } = useContext(ShopContext);
  const toggleMenu = () => {
    setMenOpend((prev) => !prev);
  };
  return (
    <header className="py-3 w-full absolute top-0 left-0 right-0 z-50 bg-white ">
      <div className="max-padd-container flexBetween">
        <Link to="/" className="bold-24 flex-1 flex">
          <span className="inline-flex">
            <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-white rotate-[-31deg] rounded-full">
              F
            </span>
            ood
          </span>
          essa
        </Link>
        <div className="flex-1 ">
          <Navbar
            toggleMenu={toggleMenu}
            menOpend={menOpend}
            containerStyle={`${
              menOpend
                ? "flex flex-col gap-y-12 h-screen w-[222px] absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl"
                : "hidden xl:flex gap-x-5 xl:gap-x8 medium-15 rounded-full px-2 py-1"
            }`}
          />
        </div>
        <div className="flex-1 flex items-center justify-end gap-x-3 sm:gap-x-10">
          {!menOpend && (
            <CgMenuLeft
              onClick={toggleMenu}
              className="text-2xl xl:hidden cursor-pointer"
            />
          )}
          <Link to={"/cart"} className="flex relative">
            <RiShoppingBagLine className="text-2xl" />
            <span className="bg-secondary text-white medium-14 flexCenter w-4 h-4 rounded-full shadow-inner">
              {getCartCount()}
            </span>
          </Link>
          <div className="group relative">
            <div>
              <button className="btn-outline border-none flexCenter gap-x-2 py-3">
                Login <RiUserLine className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
