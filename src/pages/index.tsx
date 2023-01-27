import Image from "next/image";

import Header from "@/components/templates/Header"
import Button from "@/components/atoms/Button";

import SectionImg from "@/assets/img/section-1.png"

import "swiper/css";

export default function Home() {
  return (
    <>
      <Header />
      <p className="text-3xl font-bold text-purple">
        LABRA V.22
        {/* <Button>Contact Us</Button> */}
      </p>
    </>
  )
}
