import { ReactNode, useState, useEffect, useLayoutEffect } from "react";


import GlobalContainer from "@/components/templates/GlobalContainer";
import Text, { TextType } from "@/components/atoms/Text";
import LinkComponent from "@/components/molecules/Link";
import Button from "@/components/molecules/Button";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.pageYOffset);
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

    const links = ["Overview", "Product", "Spesification", "Feature", "Warranty"]

    return (
        <nav className={`flex mt-0 fixed z-10 h-[70px] ${isScrolled ? 'bg-white' : ''} transition duration-300 ease-in-out`}>
            <GlobalContainer addClassName="flex justify-between items-center">
                <Text textType={TextType.Regular} addClassName={`text-white font-extrabold ${isScrolled ? 'text-black' : ''}`}>LABRA <span className="purple">V.22</span></Text> 
                <div className="flex gap-[30px] items-center ${isScrolled ? 'text-black' : ''}">
                    {links.map(link => (
                        <LinkComponent href="#Product" addClassName={`${isScrolled ? 'text-black' : 'text-white'}`}>{link}</LinkComponent>
                        
                    ))}
                    <LinkComponent href="#ContactUs"><Button>Contact Us</Button></LinkComponent>
                </div>
            </GlobalContainer>
        </nav>
    )
}

export default Navbar;

