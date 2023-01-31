import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper  } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import Text, { TextType } from "@/components/atoms/Text";
import GlobalContainer from "@/components/templates/GlobalContainer";

import { sliderContent } from "@/data";

import "swiper/css";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperInstance = useSwiper();

  const onSwiperSlideChange: any = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };  
  
  const onButtonClick = (index: number) => {
    setActiveIndex(index);
    // if (swiperInstance) {
    //   swiperInstance.slideTo(index);
    // }
  };
  return (
    <Swiper 
      className="w-[100vw] h-[45vw] min-h-[500px]" 
      id="Overview" 
      navigation={true}
      initialSlide={activeIndex}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSlideChange={onSwiperSlideChange}>
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
        <div className="flex gap-[20px] absolute z-10 bottom-[4%] left-[50vw] -translate-x-[50%]">
          {Array(sliderContent.length).fill("").map((arr, i) => (
            <div key={`arr-${i}`} onClick={() => onButtonClick(i)} className={`rounded-full h-[20px] w-[20px] bg-white cursor-pointer ${activeIndex === i ? '' : 'opacity-50'}`}></div>
          ))}
        </div>
      </Swiper>
  )
}
