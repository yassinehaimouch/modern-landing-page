import { cn } from "@/lib/cn";
import React from "react";

const SecondaryButton = ({ children, className, icon }) => {
  return (
    <button
      className={cn(
        "flex gap-2 py-3 px-8 rounded-full border border-white font-medium",
        className
      )}
    >
      {children}
      {icon && icon()}
    </button>
  );
};

export default SecondaryButton;
