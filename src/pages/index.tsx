

import Image from "next/image";

import Header from "@/components/templates/Header"
import Button from "@/components/molecules/Button"

import SectionImg from "@/assets/img/section-1.png"
import LinkComponent from "@/components/molecules/Link";
import GlobalContainer from "@/components/templates/GlobalContainer";

import Slider from "@/components/organisms/Slider";
import Navbar from "@/components/organisms/Navbar";

import "swiper/css";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <div className="bg-grey h-[1200px]">
        <GlobalContainer>
          
        </GlobalContainer>
      </div>
    </>
  )
}
