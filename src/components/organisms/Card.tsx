import Image, { StaticImageData } from "next/image"

import Text, { TextType } from "@/components/atoms/Text"

import RepairIcon from "@/assets/icon/repair-icon.svg";
import SettingIcon from "@/assets/icon/setting-icon.svg";

interface Props {
    cardType: CardType,
    title: string,
    subTitle?: string,
    image: StaticImageData,
    imageSecond?: StaticImageData,
    addClassName?: string,
}

export enum CardType {
    Spesification = "spesification",
    Feature = "feature",
    Support = "support",
}

const Card = ({ cardType, title, subTitle, image, imageSecond}: Props) => {
    switch(cardType) {
        case CardType.Spesification:
            return (
                <div className="w-[350px] min-h-[165px] bg-white rounded-[8px] flex px-[32px] py-[40px] items-center sm:w-[100%]">
                    <div className="flex flex-col h-[100%] gap-[20px] justify-center">
                        <Image 
                            src={image} 
                            alt="Feature of Labra V.22"
                            className="h-[32px]" />
                        <Text textType={TextType.Regular} addClassName="font-semibold text-left">{title}</Text>
                    </div>
                </div>
            )
        case CardType.Feature:
            return (
                <div className="w-[250px] min-h-[200px] bg-white rounded-[8px] p-[24px] sm:w-[100%]">
                    <div className="flex flex-col h-[100%] gap-[20px] justify-between">
                        <Text textType={TextType.Regular} addClassName="font-semibold text-left">{title}</Text>
                        <Image 
                            src={image} 
                            alt="Feature of Labra V.22"
                            className="h-[32px]" />
                    </div>
                </div>
            )
        case CardType.Support:
            return (
                <div className="w-[100%] min-h-[420px] bg-purple rounded-[12px] px-[64px] py-[20px] mb-[35px] flex flex-col justify-center">
                    <div className="flex h-[100%] w-[100%] items-center justify-between sm:flex-col sm:gap-[30px]">
                        <div className="flex flex-col gap-[10px] sm:items-center">
                            <Image
                                src={image}
                                alt="Feature of Labra V.22"
                                className="my-[20px]" />
                            <Text textType={TextType.SubTitle} addClassName="font-bold text-left text-white sm:text-center">{title}</Text>
                            <Text textType={TextType.Regular} addClassName="font-regular text-left text-white max-w-[350px] sm:text-center">{subTitle}</Text>
                        </div>
                        <Image
                            src={imageSecond ? imageSecond : "" } 
                            alt="Feature of Labra V.22"
                            className="sm:w-[250px]" />
                    </div>
                </div>
            )
        default:
            return (
                <div>awokaowkoawk</div>
            )
    }   
}

export default Card;

