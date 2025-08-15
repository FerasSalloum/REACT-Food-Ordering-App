import React, { useContext, useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { ShopContext } from "../Context/ShopContext";
import { LuSettings2 } from "react-icons/lu";
import { categories } from "../assets/data";
import Title from "../components/Title";
import Item from "../components/Item";

const Menu = () => {
  const { foods } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filterdFoods, setFilterdFoods] = useState([]);
  const [showCategories, setShowCategories] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const applyFillters = () => {
    let fillterd = [...foods];
    if (search) {
      fillterd = fillterd.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length) {
      fillterd = fillterd.filter((food) => category.includes(food.category));
    }
    return fillterd;
  };

  const applySorting = (foodList) => {
    const sortedFoods = [...foodList];
    switch (sortType) {
      case "low":
        return sortedFoods.sort((a, b) => {
          const aPrice = Object.values(a.price)[0];
          const bPrice = Object.values(b.price)[0];
          return aPrice - bPrice;
        });
      case "high":
                return sortedFoods.sort((a, b) => {
          const aPrice = Object.values(a.price)[0];
          const bPrice = Object.values(b.price)[0];
          return bPrice - aPrice;
        });
      default:
        return sortedFoods; //
    }
  };
  const toggleShowCategories = () => {
    setShowCategories(!showCategories);
  };
  useEffect(() => {
    let fillterd = applyFillters();
    let sorted = applySorting(fillterd);
    setFilterdFoods(sorted, foods, search);
    setCurrentPage(1);
  }, [category, sortType, search]);

  const getPagintedFoods = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filterdFoods.slice(startIndex, endIndex);
  };
  const TotalPages = Math.ceil(filterdFoods.length / itemsPerPage);
  return (
    <section className="max-padd-container mt-24">
      {/* search box */}
      <div className="w-full flexCenter">
        <div className="inline-flex items-center justify-center bg bg-deep overflow-hidden w-full rounded-full p-4 px-5 max-w-2xl">
          <div className="text-lg cursor-pointer">
            <RiSearch2Line />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search here..."
            className="border-none outline-none w-full text-sm pl-4 bg-deep"
          />
          <div
            onClick={() => toggleShowCategories()}
            className="flexCenter cursor-pointer text-lg border-l pl-2"
          >
            <LuSettings2 />
          </div>
        </div>
      </div>
      {/* categores filter */}
      {showCategories && (
        <div className="my-14">
          <h3 className="h4 mb4 hidden sm:flex ">select by catagory</h3>
          <div className="flexCenter sm:flexStart flex-wrap gap-x-4 sm:gap-x-12 gap-y-4">
            {categories.map((cat) => (
              <label key={cat.name}>
                <input
                  type="checkbox"
                  value={cat.name}
                  onChange={(e) => toggleFilter(e.target.value, setCategory)}
                  className="hidden peer"
                />
                <div className="flexCenter gap-2 peer-checked:text-red-500 cursor-pointer bg-deep rounded-full pr-6">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="object-cover h-20 w-20"
                  />
                  <span className="medium-14">{cat.name}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
      {/* fod container */}
      <div className="my-8 mb-20">
        {/* titel and sort */}
        <div className="flexBetween !items-start gap-7 flex-wrap pb-16 max-sm:flexCenter text-center max-sm:pb-24">
          <Title
            title1={"FOOD"}
            title2={"Slection"}
            titleStyle={"pb-0 xl:text-start"}
            paraStyle={"hidden"}
          />
          <div className="flexCenter gap-x-2">
            <span className="hidden sm:flex medium-16">Sort By:</span>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="textsm p-2.5 outline-none bg-deep text-gray-30 rounded ring-1 ring-slate-900/10"
            >
              <option value="relevant">Relevant</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        {/* foods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 pl-11">
          {getPagintedFoods().length > 0 ? (
            getPagintedFoods().map((food) => (
              <Item food={food} key={food._id} />
            ))
          ) : (
            <p className="capitalize">No food found for selected filters</p>
          )}
        </div>
      </div>
      {/* pagination */}
      <div className="flexCenter mt-14 mb-10 gap-2 sm:gap-4">
        {/* prev button */}
        <button
          disabled={currentPage == 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`btn-secondary !py-1 !px-3 ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
        >
          previous
        </button>
        {/* paeg numpers */}
        {Array.from({ length: TotalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`btn-outline !py-1 !px-3 ${
              currentPage === index + 1 && "!bg-deep"
            }`}
          >
            {index + 1}
          </button>
        ))}
        {/* next button */}
        <button
          disabled={currentPage == TotalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`btn-secondary !py-1 !px-3 ${
            currentPage === TotalPages && "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Menu;
