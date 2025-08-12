import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper/modules";
import Title from "./Title";
import "swiper/css";
import "swiper/css/pagination";
import Item from "./Item";

const PopularFoods = () => {
  const { foods } = useContext(ShopContext);
  const [popularFoods, setPopularFoods] = useState([]);
  useEffect(() => {
    const data = foods.filter((item) => item.popular);
    setPopularFoods(data.slice(0, 6));
  }, [foods]);
  return (
    <section className="max-padd-container py-10">
      <Title
        title1={"POPULAR"}
        title2={"FOODS"}
        titleStyle={"text-center"}
        paraStyle={"block pb-16"}
      />
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            700:{
                slidesPerView:2,
                spaceBetween :25,
            },
            1050:{
                slidesPerView:3,
                spaceBetween :25,
            },
            1400:{
                slidesPerView:4,
                spaceBetween :25,
            }
        }}
        modules={[Autoplay, Pagination,]}
        className="h-[225px]"
      >
        {
            popularFoods.map((food)=>(
                <SwiperSlide key={food._id} className="pl-16">
                    <Item food= {food}></Item>
                </SwiperSlide>

            ))
        }
      </Swiper>
    </section>
  );
};

export default PopularFoods;
