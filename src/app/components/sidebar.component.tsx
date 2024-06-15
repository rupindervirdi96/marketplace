import React from "react";
import { useStore } from "../redux/store";
import Image from "next/image";
import accountIcon from "../assets/account.svg";

interface SidebarProps {
  hidden: boolean;
}

export const Sidebar = ({}: SidebarProps) => {
  const { showSidebar, isShowSidebar } = useStore((state: any) => state);

  return (
    <div
      className={`bg-gray-400 h-screen w-auto ${
        isShowSidebar ? "translate-x-0" : "-translate-x-full overflow-hidden"
      } relative transition-all`}
    >
      <div className="flex justify-center items-center min-h-24 min-w-16 px-6">
        <button
          className="relative min-w-6 min-h-6 hover:scale-110"
          onClick={() => showSidebar()}
        >
          <div className="min-h-[3px] min-w-6 bg-black absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rotate-45 rounded-sm"></div>
          <div className="min-h-[3px] min-w-6 bg-black absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 -rotate-45 rounded-sm"></div>
        </button>
      </div>
      <ul>
        <li className="my-4 flex items-center justify-center ">
          <Image
            className="hover:scale-105"
            src={accountIcon}
            alt="My SVG"
            width={30}
            height={30}
            onClick={() => showSidebar()}
          />
          <span className="">ABCD</span>
        </li>
        <li className="my-4 flex items-center justify-center">
          <Image
            className="hover:scale-105"
            src={accountIcon}
            alt="My SVG"
            width={30}
            height={30}
            onClick={() => showSidebar()}
          />
        </li>
        <li className="my-4 flex items-center justify-center">
          <Image
            className="hover:scale-105"
            src={accountIcon}
            alt="My SVG"
            width={30}
            height={30}
            onClick={() => showSidebar()}
          />
        </li>
        <li className="my-4 flex items-center justify-center">
          <Image
            className="hover:scale-105"
            src={accountIcon}
            alt="My SVG"
            width={30}
            height={30}
            onClick={() => showSidebar()}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
