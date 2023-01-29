import GlobalContainer from "@/components/templates/GlobalContainer";
import ContentContainer from "@/components/templates/ContentContainer";

import Slider from "@/components/organisms/Slider";
import Navbar from "@/components/organisms/Navbar";

import "swiper/css";
import Text, { TextType } from "@/components/atoms/Text";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="bg-grey h-[1200px]">
        <GlobalContainer>
        <ContentContainer title="About">
          <Text textType={TextType.Regular}>
            LABRA V.22 Interface Gateway technology RolP (Radio Through IP) is a terminal between 2-ways radio using cellular technology with IP configuration. This technology is to ensure that the audio is transmitted simultaneously and the PPT control signal is transmitted immediately and reliably.Radio range is generally limited by limited transmission power, antenna sensitivity, and other environmental factors.
          </Text>
        </ContentContainer>
        </GlobalContainer>
      </div>
    </>
  )
}
