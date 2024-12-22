import { cn } from "@/lib/cn";
import React from "react";

const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={cn(
        "py-3 px-8 rounded-full text-black bg-white font-medium",
        className
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
