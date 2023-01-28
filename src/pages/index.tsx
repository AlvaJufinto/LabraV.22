import Image from "next/image";

import Header from "@/components/templates/Header"
import Button from "@/components/molecules/Button"

import SectionImg from "@/assets/img/section-1.png"
import LinkComponent from "@/components/molecules/Link";
import Slider from "@/components/organisms/Slider";

import "swiper/css";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
    </>
  )
}
