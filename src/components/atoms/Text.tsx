import { ReactNode } from "react";

interface Props {
    textType: TextType,
    children: ReactNode,
    newClassName?: string,
}

export enum TextType {
    Title = "title",
    SubTitle = "subTitle",
    Regular = "regular"
}

const Text = ({ textType, children, newClassName }: Props) => {
    switch(textType) {
        case TextType.Title:
            return (
                <h1 className={`text-[64px] ${newClassName}`}>{ children }</h1>
            )
        case TextType.SubTitle:
            return (
                <p className={`text-[40px] ${newClassName}`}>{children}</p>
            )
        case TextType.Regular:
            return (
                <p className={`text-[24px] ${newClassName}`}>{children}</p>
            )
    }   
}

export default Text;

