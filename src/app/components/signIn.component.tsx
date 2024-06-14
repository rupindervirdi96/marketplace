import Link from "next/link";
import React from "react";
import { AuthModels } from "../pages/models/auth.model";

interface SignInProps {
  displayMode: Boolean;
  setAuthType: Function;
}

export const SignIn = ({ ...props }: SignInProps) => {
  const { displayMode, setAuthType } = props;

  const onSubmit = () => {};

  return (
    <div className="bg-404040 text-white p-4 rounded-tl-md rounded-bl-md">
      {displayMode ? (
        <div className="h-full w-full grid place-items-center p-2">
          <h1 className="text-3xl text-center ">Sign up</h1>
        </div>
      ) : (
        <div className="h-full w-full grid grid-rows-[max-content_1fr_max-content] place-items-center">
          <h1 className="text-2xl text-center">Sign In</h1>
          <form
            className="grid [&>*]:my-2 text-black place-items-center w-full px-2"
            action=""
          >
            <input
              className="p-[0.2rem] text-sm px-1 outline-none rounded-sm"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-[0.2rem] text-sm px-1 outline-none rounded-sm"
              type="password"
              placeholder="Password"
            />
            <input
              className="p-1 px-2 text-white outline-none rounded-sm bg-pink-600 w-fit"
              type="submit"
              value="SignIn"
            />
          </form>
          <button
            className="underline"
            onClick={() => setAuthType(AuthModels.AuthType.SignUp)}
          >
            Not a member! Sign up.
          </button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
