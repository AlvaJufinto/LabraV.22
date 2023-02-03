import { Swiper, SwiperSlide, useSwiper  } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Text, { TextType } from "@/components/atoms/Text";
import GlobalContainer from "@/components/templates/GlobalContainer";

import { sliderContent } from "@/data";

import "swiper/css";
import 'swiper/css/pagination';


export default function Slider() {

  return (
    <Swiper 
      className="w-[100vw] h-[45vw] min-h-[500px]" 
      modules={[Autoplay, Navigation, Pagination]}
      id="Overview" 
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}>
        {sliderContent.map((slider, i) => (
          <SwiperSlide key={`${slider}-${i}`} style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${slider.img.src})`
          }}
          className={`bg-no-repeat sm:bg-center ${i === 0 ? "bg-center sm:bg-right" : ""} ${i === 2 ? "bg-left-bottom" : ""}   bg-cover flex`}>
            <GlobalContainer addClassName=" flex flex-col justify-center">
              <Text textType={TextType.Title} addClassName="text-white max-w-[685px] font-extrabold">{slider.title}</Text>
              <Text textType={TextType.Regular} addClassName="text-white max-w-[540px]">{slider.subTitle}</Text>
            </GlobalContainer>
          </SwiperSlide>
        ))}
      </Swiper>
  )
}
