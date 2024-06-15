import Link from "next/link";
import React from "react";

interface AlertProps {
  message: String;
  hide: Boolean;
}

export const Alert = ({ ...props }: AlertProps) => {
  const alertColourVariants = {
    info: "bg-yellow-200/90",
    warn: "bg-red-400/90",
  };

  const { message, hide } = props;

  return (
    <div
      //  hidden={Boolean(hide)}
      className={`absolute left-[50%] text-lg top-full ${
        !hide ? "translate-y-[-150%]" : ""
      } translate-x-[-50%] ${
        alertColourVariants.warn
      } py-2 px-6 rounded-md transition-all ease-in`}
    >
      <span>{message}</span>
    </div>
  );
};

export default Alert;
