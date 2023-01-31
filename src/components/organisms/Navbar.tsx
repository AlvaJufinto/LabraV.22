import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

import GlobalContainer from "@/components/templates/GlobalContainer";
import Text, { TextType } from "@/components/atoms/Text";
import LinkComponent from "@/components/molecules/Link";
import Button from "@/components/molecules/Button";

import CloseIcon from "@/assets/icon/close-icon.svg"

import { links } from "@/data";

const MobileNavbar = ({ setIsShowNav, isShowNav }: any) => {
    const router = useRouter();

    const toLink = (link: string) => {
        setIsShowNav(false);
        setTimeout(() => {
            router.push(`/#${link}`)
        }, 500)
    }

    return (
        <div className={`${isShowNav ? "translate-x-[0vw]" : "translate-x-[100vw] " } transition-all duration-300 top-0 left-0 fixed h-[100vh] w-[100vw] bg-grey p-[20px] z-50`}>
            <div className="flex flex-col justify-between h-[100%]">
                <Image src={CloseIcon} alt="CLoseIcon"  onClick={() => setIsShowNav(false)} />
                <div className="flex flex-col gap-[20px]">
                    {links.map(link => (
                        <div key={`${link}-link`} onClick={() => toLink(link)}>
                            <Text textType={TextType.SubTitle} addClassName="text-black text-right font-regular">{link}</Text>
                        </div>    
                    ))} 
                    <LinkComponent href="#ContactUs" addClassName="text-right">
                        <Button >
                            <div onClick={() => toLink("ContactUs")}>
                                <Text textType={TextType.SubTitle}>Contact Us</Text>
                            </div>
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
    const [isShowNav, setIsShowNav] = useState(false);
    
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
            <MobileNavbar setIsShowNav={setIsShowNav} isShowNav={isShowNav} />
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

