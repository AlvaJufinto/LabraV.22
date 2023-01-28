import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import SectionImg1 from "@/assets/img/section-1.png";
import SectionImg2 from "@/assets/img/section-2.png";
import SectionImg3 from "@/assets/img/section-3.png";

import "swiper/css";

export default function Slider() {
  const sliderContent = [
    {
      img: SectionImg1,
      title: "New Generation of Two-way Radio",
      subTitle: "Interface Gateway Technology RoIP (Radio Through IP) Solution"
    },
    {
      img: SectionImg2,
      title: "Fast Transmission Signal",
      subTitle: "Never lost an important signal"
    },
    {
      img: SectionImg3,
      title: "Flexibility With LABRA V.22",
      subTitle: "Combine LABRA V.22 With your require radio or even your favorite!"
    }
  ]

  return (
      <Swiper className="">
        {sliderContent.map((slider, i) => (
          <SwiperSlide>
            <Image
              src={slider.img}
              alt="Picture of the author"
              className="w-[100vw] select-none"
            />
          </SwiperSlide>
        ))}
        <div className="flex gap-[20px] absolute z-10 bottom-[4%] left-[50vw] -translate-x-[50%]">
          <div className="rounded-full h-[20px] w-[20px]  bg-white opacity-50"></div>
          <div className="rounded-full h-[20px] w-[20px] bg-white opacity-50"></div>
          <div className="rounded-full h-[20px] w-[20px] bg-white opacity-50"></div>
        </div>
      </Swiper>
  )
}
