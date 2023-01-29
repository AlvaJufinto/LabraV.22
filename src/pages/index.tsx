import GlobalContainer from "@/components/templates/GlobalContainer";

import Slider from "@/components/organisms/Slider";
import Navbar from "@/components/organisms/Navbar";

import "swiper/css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="bg-grey h-[1200px]">
        <GlobalContainer>
          
        </GlobalContainer>
      </div>
    </>
  )
}
