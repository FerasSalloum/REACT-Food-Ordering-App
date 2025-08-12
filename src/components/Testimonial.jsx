import React from "react";
import Title from "./Title";
import { FaCheck, FaStar } from "react-icons/fa6";
import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import food1 from "../assets/food_1.png";
import food2 from "../assets/food_2.png";
import food3 from "../assets/food_12.png";
import food4 from "../assets/food_24.png";

const Testimonial = () => {
  return (
    <div>
      <div className="py-10">
        <Title
          title1={"DELICIOUS"}
          title2={"REVIEWS"}
          titleStyle={"text-center"}
          paraStyle={"block pb-16"}
        />
        <div className="max-padd-container">
          {/* continer */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20 mb-16 rounded-3xl">
            {/* left Sied */}
            <div className="hidden sm:flex items-start sm:items-center justify-evenly flex-col gap-">
              <Title
                title1={"What people"}
                title2={"Says"}
                titleStyle={"pd-10"}
                paraStyle={"block"}
              />
              <div className="flex flex-col gap-1 bg-deep p-2 rounded">
                <div className="flex text-secondary gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="medium-14">
                  mor Than <b>+25,000 reviews</b>
                </div>
              </div>
            </div>
            {/* rigth side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 ">
              {/* Riview card1 */}
              <div className="flex flex-col gap-1 rounded-lg p-4 bg-deep">
                <div className="flexBetween">
                  <div className="flexBetween gap-x-2">
                    <img
                      src={user1}
                      alt=""
                      height={44}
                      width={44}
                      className="rounded-full"
                    />
                    <h5 className="bold-14">Jhon Doe</h5>
                  </div>
                  <div className="bg-secondary text-white rounded-full flexCenter gap-x-2 p-1 px-2 text-xs font-semibold">
                    <FaCheck />
                    Verified
                  </div>
                </div>
                <hr className="h-[1px] w-full my-2" />
                <div className="flex text-secondary gap-x-1 mt-5 mb-1 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4 className="h4">High Quality</h4>
                <p>
                  The food was aboslutely delicious! Every ite was bursting with
                  flavor, and the quality was top-notch. The service was quick,
                  and everything arrived fresh. Highly recommend trying it out!
                </p>
                <div className="flex mt-5">
                  <img
                    src={food1}
                    alt=""
                    height={44}
                    width={44}
                    className=" required aspect-square object-cover"
                  />
                  <img
                    src={food2}
                    alt=""
                    height={44}
                    width={44}
                    className=" required aspect-square object-cover"
                  />
                </div>
              </div>
              {/* Riview card2 */}
              <div className="flex flex-col gap-1 rounded-lg p-4 bg-deep">
                <div className="flexBetween">
                  <div className="flexBetween gap-x-2">
                    <img
                      src={user2}
                      alt=""
                      height={44}
                      width={44}
                      className="rounded-full"
                    />
                    <h5 className="bold-14">Izabell stress</h5>
                  </div>
                  <div className="bg-secondary text-white rounded-full flexCenter gap-x-2 p-1 px-2 text-xs font-semibold">
                    <FaCheck />
                    Verified
                  </div>
                </div>
                <hr className="h-[1px] w-full my-2" />
                <div className="flex text-secondary gap-x-1 mt-5 mb-1 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4 className="h4">Modern Design</h4>
                <p>
                  Amazing experience! The meals were perfecrly cooked, and the
                  flavores blended beautifuily. The delivery was on time, and
                  the packaging kept everything warm. Will definitely order
                  again!
                </p>
                <div className="flex mt-5">
                  <img
                    src={food3}
                    alt=""
                    height={44}
                    width={44}
                    className=" required aspect-square object-cover"
                  />
                  <img
                    src={food4}
                    alt=""
                    height={44}
                    width={44}
                    className=" required aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
