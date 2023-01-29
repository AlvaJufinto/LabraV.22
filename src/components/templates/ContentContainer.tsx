import { ReactNode } from "react";

import Text, { TextType } from "../atoms/Text";

interface Props {
    children: ReactNode;
    title: string;
    addClassName?: string;
}

const ContentContainer = ({ title, children, addClassName }: Props) => {
    return (
        <section>
            <Text textType={TextType.Title} addClassName={`font-extrabold text-center mt-[120px] mb-[70px] ${addClassName}`}>{`${title} `}<span className="purple">LABRA V.22</span></Text>
            <div className="flex items-center text-center">
                {children}
            </div>
        </section>
    )
}

export default ContentContainer;

