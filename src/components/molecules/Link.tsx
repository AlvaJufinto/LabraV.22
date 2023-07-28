/** @format */

import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
  addClassName?: string;
}

const LinkComponent = ({ children, href, addClassName }: Props) => {
  return (
    <Link
      href={href}
      className={`select-none text-white no-underline text-[14px] font-medium ${addClassName}`}>
      {children}
    </Link>
  );
};

export default LinkComponent;
