import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    href: string,
    addClassname: string,
}

const LinkComponent = ({ children, href, addClassname }: Props) => {
    return (
        <Link href={href} className={`text-black no-underline text-[14px] font-medium ${addClassname}`}>
            {children}
        </Link>
    )
}

export default LinkComponent;

