"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import HomePage from "../home/page";
import { usePathname } from "next/navigation";

interface ProfilePageProps {
  user: string;
}

export const ProfilePage = ({ ...props }: ProfilePageProps) => {
  const { user } = props;
  // const pathname = usePathname();
  // const basePath = pathname.split("/");
  return (
    <>
      <HomePage>
        {/* {basePath.includes("profile") && ( */}
        
        <div className="w-[32rem] grid absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 bg-white rounded-md place-items-center">
          <Link
            href="/"
            id="closeBtn"
            className="absolute top-0 left-[100%] translate-x-[-100%] bg-blue-500 h-4 w-4 hover:scale-150 rounded-tr-md"
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-45 bg-white h-[1px] w-2"></div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -rotate-45 bg-white h-[1px] w-2"></div>
          </Link>
          <div className="grid h-full grid-cols-[max-content_1fr_max-content] place-items-center p-8">
            <div className="">
              <div className="h-24 w-24 rounded-md bg-black"></div>
            </div>
            <div className="grid place-content-start align-center h-full px-6">
              <ul className="text-sm text-gray-600">
                <li>{user}</li>
                <li>rupindervirdi96@gmail.com</li>
                <li>Maqsudan, India</li>
                <li>member since 4 years</li>
              </ul>
            </div>
            <div className="">
              <ul className="text-xs flex flex-col items-left">
                <li className="bg-blue-500 w-fit text-gray-200 rounded-md p-2 my-2 hover:bg-blue-600">
                  Change Password
                </li>
                <li className="bg-blue-500 hover:bg-blue-600 w-fit text-gray-200 rounded-md p-2 my-2">
                  Sign Out
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* )} */}
      </HomePage>
    </>
  );
};

export default ProfilePage;
