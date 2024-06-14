import Link from "next/link";
import React from "react";

interface AlertProps {
  message: String;
  hide: Boolean;
}

export const Alert = ({ ...props }: AlertProps) => {
  const alertColourVariants = {
    info: "bg-yellow-300",
    warn: "red",
  };

  const { message, hide } = props;

  return (
    <div
      //  hidden={Boolean(hide)}
      className={`absolute left-[50%] text-lg top-full ${
        !hide ? "translate-y-[-150%]" : ""
      } translate-x-[-50%] ${
        alertColourVariants.info
      } py-2 px-6 rounded-md transition-all ease-in`}
    >
      <span>{message}</span>
    </div>
  );
};

export default Alert;
