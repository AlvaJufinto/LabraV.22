import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import Text, { TextType } from "@/components/atoms/Text";
import GlobalContainer from "@/components/templates/GlobalContainer";

import { sliderContent } from "@/data";

import "swiper/css";

export default function Slider() {
  return (
      <Swiper className="relative" id="Overview">
        {sliderContent.map((slider, i) => (
          <SwiperSlide key={`${slider}-${i}`}>
            <GlobalContainer addClassName="absolute top-[50%] -translate-y-[50%]">
              <Text textType={TextType.Title} addClassName="text-white max-w-[685px] font-extrabold">{slider.title}</Text>
              <Text textType={TextType.Regular} addClassName="text-white max-w-[540px]">{slider.subTitle}</Text>
            </GlobalContainer>
            <Image
              src={slider.img}
              alt="Labra V.22 Description (IP Radio)"
              className="w-[100vw] select-none"
            />
          </SwiperSlide>
        ))}
        <div className="flex gap-[20px] absolute z-10 bottom-[4%] left-[50vw] -translate-x-[50%]">
          <div className="rounded-full h-[20px] w-[20px] bg-white opacity-50"></div>
          <div className="rounded-full h-[20px] w-[20px] bg-white opacity-50"></div>
          <div className="rounded-full h-[20px] w-[20px] bg-white opacity-50"></div>
        </div>
      </Swiper>
  )
}
