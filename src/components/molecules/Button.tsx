import { ReactNode } from "react";

interface Props {
    children: ReactNode,
}

const Button = ({ children }: Props) => {
    return (
        <button className="btn bg-purple text-white py-[10px] px-[20px] text-[14px] font-medium rounded-[5px]">
            {children}
        </button>
    )
}

export default Button;

