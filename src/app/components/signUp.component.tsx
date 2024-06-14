import Link from "next/link";
import React from "react";
import { AuthModels } from "../pages/models/auth.model";

interface SignUpProps {
  displayMode: Boolean;
  setAuthType: Function;
}

export const SignUp = ({ ...props }: SignUpProps) => {
  const { displayMode, setAuthType } = props;

  const onSubmit = () => {};

  return (
    <div className="bg-pink-600 text-white p-4 rounded-tr-md rounded-br-md">
      {displayMode ? (
        <div className="h-full w-full grid place-items-center p-2">
          <h1 className="text-4xl text-center">Sign in</h1>
        </div>
      ) : (
        <div className="h-full w-full grid grid-rows-[max-content_1fr_max-content] place-items-center">
          <h1 className="text-2xl text-center">Sign Up</h1>
          <form
            className="grid text-black [&>*]:my-2 place-items-center w-full px-2"
            action=""
          >
            <input
              className="p-[0.2rem] px-1 text-sm outline-none rounded-sm"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-[0.2rem] px-1 text-sm outline-none rounded-sm"
              type="password"
              placeholder="Password"
            />
            <input
              className="p-[0.2rem] px-1 text-sm outline-none rounded-sm"
              type="text"
              placeholder="OTP"
            />
            <input
              className="p-1 px-2 text-white outline-none rounded-sm bg-black w-fit"
              type="submit"
              value="SignUp"
            />
          </form>
          <button
            className="underline"
            onClick={() => setAuthType(AuthModels.AuthType.SignIn)}
          >
            Already a member! Sign in.
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
