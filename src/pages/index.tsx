import Image from "next/image";

import GlobalContainer from "@/components/templates/GlobalContainer";
import ContentContainer from "@/components/templates/ContentContainer";

import Navbar from "@/components/organisms/Navbar";
import Slider from "@/components/organisms/Slider";
import Card, { CardType } from "@/components/organisms/Card";
import Footer from "@/components/organisms/Footer";

import Text, { TextType } from "@/components/atoms/Text";

import { spesificationContent, featureContent, supportContent } from "@/data";

import LabraBg from "@/assets/img/labra-product.png";
import FeatureBg from "@/assets/img/feature-bg.png";

import "swiper/css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="bg-grey" id="Product">
        <GlobalContainer>
          <ContentContainer title="About">
            <Text textType={TextType.Regular}>
              LABRA V.22 Interface Gateway technology RolP (Radio Through IP) is a terminal between 2-ways radio using cellular technology with IP configuration. This technology is to ensure that the audio is transmitted simultaneously and the PPT control signal is transmitted immediately and reliably.Radio range is generally limited by limited transmission power, antenna sensitivity, and other environmental factors.
            </Text>
          </ContentContainer>
        </GlobalContainer>
        <Image
          src={LabraBg}
          alt="Picture of Labra (IP Radio)"
          className="w-[100vw]"
        />
      </div>
      <div className="bg-black" id="Spesification">
        <GlobalContainer>
          <ContentContainer title="Spesification of" addClassName="text-white">
            <div className="flex flex-wrap justify-center gap-[30px] ">
              {spesificationContent.map(content => (
                <Card title={content.title} cardType={CardType.Spesification} image={content.image} />
              ))}
            </div>
          </ContentContainer>
        </GlobalContainer>
      </div>
      <div 
        className="min-h-[1200px] w-[100vw] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${FeatureBg.src})`,
        }} 
        id="Feature">
        <GlobalContainer>
          <ContentContainer title="Discover Features of" addClassName="text-white">
            <div className="flex flex-wrap justify-center gap-[30px] ">
              {featureContent.map(content => (
                <Card title={content.title} cardType={CardType.Feature} image={content.image} />
              ))}
            </div>
          </ContentContainer>
        </GlobalContainer>
      </div>
      <div className="bg-grey" id="Warranty">
        <GlobalContainer>
          <ContentContainer title="Support of" addClassName="text-black">
            <div className="w-[100%]">
              {supportContent.map(content => (
                <Card title={content.title} subTitle={content.subTitle} cardType={CardType.Support} image={content.image} imageSecond={content.imageSecond} />
              ))}
            </div>
          </ContentContainer>
        </GlobalContainer>
      </div>
      <Footer />
    </>
  )
}
