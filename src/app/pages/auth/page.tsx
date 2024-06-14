"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HomePage from "../home/page";
import SignIn from "@/app/components/signIn.component";
import SignUp from "@/app/components/signUp.component";
import { AuthModels } from "../models/auth.model";
import { usePathname } from "next/navigation";

interface AuthPageProps {
  // children: React.ReactNode;
}

export const AuthPage = ({ ...props }: AuthPageProps) => {
  const [authType, setAuthType] = useState<AuthModels.AuthType>(
    AuthModels.AuthType.SignIn
  );
  const pathname = usePathname();
  const currentPage = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <HomePage>
      {currentPage === "auth" && (
        <div className="h-[22rem] w-[32rem] grid grid-cols-[1fr_1fr] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
          <Link
            href="/pages/home"
            id="closeBtn"
            className="absolute top-0 left-[100%] translate-x-[-100%] bg-404040 h-4 w-4 hover:scale-150 rounded-tr-md"
          >
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-45 bg-white h-[1px] w-2"></div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -rotate-45 bg-white h-[1px] w-2"></div>
          </Link>
          <SignIn
            setAuthType={setAuthType}
            displayMode={authType === AuthModels.AuthType.SignUp}
          />
          <SignUp
            setAuthType={setAuthType}
            displayMode={authType === AuthModels.AuthType.SignIn}
          />
        </div>
      )}
    </HomePage>
  );
};

export default AuthPage;
