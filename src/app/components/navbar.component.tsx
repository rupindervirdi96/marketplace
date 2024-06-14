import Link from "next/link";
import React from "react";
import accountIcon from "../assets/account.svg";
import menuIcon from "../assets/menu.svg";
import filterIcon from "../assets/filter.svg";
import Image from "next/image";
import SearchBar from "./search.component";
import { useStore } from "../redux/store";

interface NavbarProps {
  profilePic: String;
}

export const Navbar = ({ ...props }: NavbarProps) => {
  const showSidebar = useStore((state: any) => state.showSidebar);

  const { profilePic } = props;
  return (
    <div className="w-full grid grid-cols-[1fr_max-content_max-content_max-content_max-content] place-items-center gap-4 p-6">
      <div
        id="search"
        className="w-full border-[1px] p-2 border-gray-400 bg-white rounded-full"
      >
        <SearchBar />
      </div>
      <button className="">
        <Image
          className="hover:scale-105"
          src={filterIcon}
          alt="My SVG"
          width={26}
          height={26}
        />
      </button>
      <span className="text-black hover:text-slate-800">Rupinder Virdi</span>
      <Link
        href={"/pages/auth"}
        className="w-[44px] h-[44px] rounded-full grid place-items-center"
      >
        <Image
          className="h-full w-full"
          src={(profilePic || accountIcon) as any}
          alt="My SVG"
        />
      </Link>
      <button>
        <Image
          className="hover:scale-105"
          src={menuIcon}
          alt="My SVG"
          width={26}
          height={26}
          onClick={() => showSidebar()}
        />
      </button>
    </div>
  );
};

export default Navbar;
