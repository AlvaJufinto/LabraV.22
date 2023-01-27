import { ReactNode } from "react";

interface Props {
    textType: TextType,
    children: ReactNode,
    newClassname: string,
}

export enum TextType {
    Title = "title",
    SubTitle = "subTitle",
    Regular = "regular"
}

const Text = ({ textType, children, newClassname }: Props) => {
    switch(textType) {
        case 'title':
            return (
                <h1 className={`text-[64px] ${newClassname}`}>{ children }</h1>
            )
        case 'subTitle':
            return (
                <p className={`text-[40px] ${newClassname}`}>{children}</p>
            )
        case 'regular':
            return (
                <p className={`text-[24px] ${newClassname}`}>{children}</p>
            )
    }   
}

export default Text;

