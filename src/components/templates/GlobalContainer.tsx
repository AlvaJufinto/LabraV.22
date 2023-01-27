import { ReactNode } from "react";

interface Props {
    children: ReactNode,
}

const GlobalContainer = ({ children }: Props) => {
    return (
        <div className="max-w-[120px]">
            {children}
        </div>
    )
}

export default GlobalContainer;

