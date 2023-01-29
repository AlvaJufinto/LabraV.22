import Image, { StaticImageData } from "next/image"

import Text, { TextType } from "@/components/atoms/Text"

interface Props {
    cardType: CardType,
    title: string,
    image: StaticImageData,
    addClassName?: string,
}

export enum CardType {
    Spesification = "spesification",
    Feature = "feature",
    Support = "support",
}

const Card = ({ cardType, addClassName, title, image}: Props) => {
    switch(cardType) {
        case CardType.Spesification:
            return (
                <div className="w-[350px] min-h-[165px] bg-white rounded-[8px] flex px-[32px] py-[40px] items-center">
                    <div className="flex flex-col h-[100%] gap-[20px] justify-center">
                        <Image 
                            src={image} 
                            alt="Feature of Labra V.22"
                            className="h-[32px]" />
                        <Text textType={TextType.Regular} addClassName="font-semibold text-left">{title}</Text>
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

