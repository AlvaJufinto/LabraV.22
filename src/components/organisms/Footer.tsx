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
                    className="h-[300px] w-[100%] rounded-[15px] bg-purple flex items-center px-[110px]"
                    style={{
                        backgroundImage: `url(${FooterBg.src})` 
                    }}>
                        <div>
                            <Text addClassName="text-white font-extrabold mb-[30px]" textType={TextType.SubTitle}>Contact and Support</Text>
                            <div className="flex gap-[20px] mb-[30px]">
                                <Image src={WhatsappIcon} alt="ContactIcon" />
                                <Text textType={TextType.Regular} addClassName="text-white font-bold">008123458592</Text>
                            </div>
                            <div className="flex gap-[20px]">
                                <Image src={EmailIcon} alt="ContactIcon" />
                                <Text textType={TextType.Regular} addClassName="text-white font-bold">OrangHitamBerciuman@gmail.com</Text>
                            </div>
                        </div>
                </div>
            </GlobalContainer>            
        </footer>
    )
}

export default Footer;

