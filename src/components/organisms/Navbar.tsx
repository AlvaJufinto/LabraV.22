import Image from "next/image";
import { useState, useEffect } from "react";

import GlobalContainer from "@/components/templates/GlobalContainer";
import Text, { TextType } from "@/components/atoms/Text";
import LinkComponent from "@/components/molecules/Link";
import Button from "@/components/molecules/Button";

import CloseIcon from "@/assets/icon/close-icon.svg"

import { links } from "@/data";

const MobileNavbar = ({ setIsShowNav }: any) => {
    return (
        <div className="top-0 left-0 fixed h-[100vh] w-[100vw] bg-grey z-50 p-[20px]">
            <div className="flex flex-col justify-between h-[100%]">
                <Image src={CloseIcon} alt="CLoseIcon"  onClick={() => setIsShowNav(false)} />
                <div className="flex flex-col gap-[20px]">
                    {links.map(link => (
                        <LinkComponent key={`${link}-link`} href={`#${link}`} addClassName="text-black text-right font-regular">
                            <Text textType={TextType.SubTitle}>{link}</Text>
                        </LinkComponent>    
                    ))} 
                    <LinkComponent href="#ContactUs" addClassName="text-right">
                        <Button>
                            <Text textType={TextType.SubTitle}>Contact Us</Text>
                        </Button>
                    </LinkComponent>
                </div>
                <Text textType={TextType.SubTitle} addClassName="font-bold">Labra <span className="purple">V.22</span></Text>
            </div>
        </div>
    )
}

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isShowNav, setIsShowNav] = useState(true);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(window.pageYOffset);
        })
    }, []); 

    useEffect(() => {
        if(scrollPosition >= 300) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [scrollPosition]);

    return (
        <>
            {isShowNav && <MobileNavbar setIsShowNav={setIsShowNav} />}
            {
                !isShowNav &&
                <nav className={`flex mt-0 fixed z-10 h-[70px] ${isScrolled ? 'bg-white' : ''} transition duration-300 ease-in-out`}>
                    <GlobalContainer addClassName="flex justify-between items-center">
                        {  
                            // isShowNav &&
                            <Text textType={TextType.Regular} addClassName={`text-white font-extrabold ${isScrolled ? 'text-black' : ''}`}>LABRA <span className="purple">V.22</span></Text>
                        } 
                        <div className="flex gap-[30px] items-center ${isScrolled ? 'text-black' : ''} sm:hidden">
                            {links.map(link => (
                                <LinkComponent key={`${link}-link`} href={`#${link}`} addClassName={`${isScrolled ? 'text-black' : 'text-white'}`}>{link}</LinkComponent>
                            ))}
                            <LinkComponent href="#ContactUs"><Button>Contact Us</Button></LinkComponent>
                        </div>
                        {
                            !isShowNav && 
                            <div className="hidden sm:flex flex-col gap-[5px] w-[30px]" onClick={() => setIsShowNav(!isShowNav)}>
                                <div className={`h-[2px] w-[100%] ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
                                <div className={`h-[2px] w-[100%] ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
                                <div className={`h-[2px] w-[100%] ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
                            </div>
                        }
                    </GlobalContainer>
                </nav>
            }
        </>
    )
}

export default Navbar;

