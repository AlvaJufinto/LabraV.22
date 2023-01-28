import { ReactNode } from "react";

import GlobalContainer from "@/components/templates/GlobalContainer";
import Text, { TextType } from "@/components/atoms/Text";
import LinkComponent from "@/components/molecules/Link";
import Button from "@/components/molecules/Button";

interface Props {
    
}

const Navbar = () => {
    return (
        <nav className="flex mt-0 fixed z-10 h-[70px]">
            <GlobalContainer addClassName="flex justify-between items-center">
                <Text textType={TextType.Regular} addClassName="text-white font-extrabold">LABRA <span className="purple">V.22</span></Text> 
                <div className="flex gap-[30px] items-center">
                    <LinkComponent href="#Overview">Overview</LinkComponent>
                    <LinkComponent href="#Product">Product</LinkComponent>
                    <LinkComponent href="#Spesification">Spesification</LinkComponent>
                    <LinkComponent href="#Feature">Feature</LinkComponent>
                    <LinkComponent href="#Warranty">Warranty</LinkComponent>
                    <LinkComponent href="#ContactUs"><Button>Contact Us</Button></LinkComponent>
                </div>
            </GlobalContainer>
        </nav>
    )
}

export default Navbar;

