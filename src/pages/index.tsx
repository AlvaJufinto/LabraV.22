import Header from "@/components/templates/Header"
import Button from "@/components/molecules/Button";

import SectionImg from "@/assets/img/section-1.png"
import LinkComponent from "@/components/molecules/Link";

import "swiper/css";

export default function Home() {
  return (
    <>
      <Header />
      <p className="text-3xl font-bold text-purple">
        LABRA V.22
        <LinkComponent href="#home">asdasd</LinkComponent>
        {/* <Button>Contact Us</Button> */}
      </p>
    </>
  )
}
