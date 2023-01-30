import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import Text, { TextType } from "@/components/atoms/Text";
import GlobalContainer from "@/components/templates/GlobalContainer";

import { sliderContent } from "@/data";

import "swiper/css";

export default function Slider() {
  const [swiper, setSwiper] = useState(null);

  // const slideTo = (index) => swiper.slideTo(index);

  return (
    <Swiper 
      className="w-[100vw] h-[45vw] min-h-[500px]" 
      id="Overview"
      onSwiper={(swiper) => console.log("swiper")}>
        {sliderContent.map((slider, i) => (
          <SwiperSlide key={`${slider}-${i}`} style={{
            backgroundImage: `url(${slider.img.src})`
          }}
          className="bg-no-repeat bg-center bg-cover flex">
            <GlobalContainer addClassName=" flex flex-col justify-center">
              <Text textType={TextType.Title} addClassName="text-white max-w-[685px] font-extrabold">{slider.title}</Text>
              <Text textType={TextType.Regular} addClassName="text-white max-w-[540px]">{slider.subTitle}</Text>
            </GlobalContainer>
          </SwiperSlide>
        ))}
        <div className="flex gap-[20px] absolute z-10 bottom-[4%] left-[50vw] -translate-x-[50%]">
          {Array(sliderContent.length).fill("").map((arr) => (
            <div className="rounded-full h-[20px] w-[20px] bg-white opacity-50"></div>
          ))}
        </div>
      </Swiper>
  )
}
