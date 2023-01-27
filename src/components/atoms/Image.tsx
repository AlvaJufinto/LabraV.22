import { ReactNode } from "react";

interface Props {
    ImageType: ImageType,
    children: ReactNode,
    newClassname: string,
}

export enum ImageType {
    Title = "title",
    SubTitle = "subTitle",
    Regular = "regular"
}

const Image = ({ children, newClassname }: Props) => {
   
}

export default Image;

