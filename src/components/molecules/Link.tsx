import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    href: string,
}

const LinkComponent = ({ children, href }: Props) => {
    return (
        <Link href={href} className="text-black no-underline text-[14px] font-medium">
            {children}
        </Link>
    )
}

export default LinkComponent;

