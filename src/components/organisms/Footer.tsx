import Image from "next/image";

import GlobalContainer from "@/components/templates/GlobalContainer";
import Text, { TextType } from "@/components/atoms/Text";

import FooterBg from "@/assets/img/footer-bg.png";
import EmailIcon from "@/assets/icon/email-icon.svg";
import WhatsappIcon from "@/assets/icon/whatsapp-icon.svg";

const Footer = () => {

    return (
        <footer className={`bg-grey min-h-[500px] py-[150px]`} id="ContactUs">
            <GlobalContainer>
                <div
                    className="h-[280px] w-[100%] rounded-[15px] flex items-center px-[100px] sm:px-[50px] bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${FooterBg.src})` 
                    }}>
                        <div>
                            <Text addClassName="text-white font-extrabold mb-[30px]" textType={TextType.SubTitle}>Contact and Support</Text>
                            <div className="flex gap-[20px] mb-[30px] opacity-80 hover:opacity-100 hover:translate-x-[5px] transition-all">
                                <Image src={WhatsappIcon} alt="ContactIcon" />
                                <Text textType={TextType.Regular} addClassName="text-white font-medium">-</Text>
                            </div>
                            <div className="flex gap-[20px] opacity-80 hover:opacity-100 hover:translate-x-[5px] transition-all">
                                <Image src={EmailIcon} alt="ContactIcon" />
                                <Text textType={TextType.Regular} addClassName="text-white font-medium ">marketing@labra.com</Text>
                            </div>
                        </div>
                </div>
            </GlobalContainer>            
        </footer>
    )
}

export default Footer;

