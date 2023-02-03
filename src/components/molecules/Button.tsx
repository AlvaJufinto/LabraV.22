import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    addClassName: string,
}

const Button = ({ children, addClassName }: Props) => {
    return (
        <button className={`btn select-none bg-purple text-white py-[10px] px-[20px] text-[14px] font-medium rounded-[5px] ${addClassName}`}>
            {children}
        </button>
    )
}

export default Button;

