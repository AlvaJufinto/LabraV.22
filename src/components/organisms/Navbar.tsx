import { ReactNode } from "react";

import Text from "@/components/atoms/Text";
import { TextType } from "@/components/atoms/Text";


interface Props {
    children: ReactNode,
}

const Navbar = ({ children }: Props) => {
    return (
        <nav className="max-w-[120px]">
           <Text textType={TextType.SubTitle}>LABRA V.22</Text> 
        </nav>
    )
}

export default Navbar;

