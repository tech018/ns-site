"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { Box } from "@mui/material";
import { useState } from "react";
export default function ProductSwiper() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const images = [
    {
      id: 1,
      image: "/images/coffee.jpeg",
    },
    {
      id: 2,
      image: "/images/chair.jpeg",
    },
    {
      id: 3,
      image: "/images/sofa.jpeg",
    },
  ];
  return (
    <Box>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        onSlideChange={(value) => setActiveIndex(value.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((i) => (
          <SwiperSlide key={i.id}>
            <Image src={i.image} height={450} width={506} alt={i.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box {...{ display: "flex", gap: 2, margin: "10px 0px" }}>
        {images.map((item, index) => (
          <Image
            style={{ opacity: activeIndex === index ? 1 : 0.5 }}
            key={item.id}
            src={item.image}
            width={75}
            height={75}
            alt={item.image}
          />
        ))}
      </Box>
    </Box>
  );
}
