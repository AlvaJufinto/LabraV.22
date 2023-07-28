/** @format */

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  addClassName?: string;
}

const GlobalContainer = ({ children, addClassName }: Props) => {
  return (
    <div className={`w-[100vw] flex justify-center`}>
      <div className={`w-[1110px] ${addClassName} xl:w-[100vw] xl:px-[5%]`}>
        {children}
      </div>
    </div>
  );
};

export default GlobalContainer;
