import { cn } from "@/lib/cn";
import React from "react";

const Container = ({ children, className }) => {
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
};

export default Container;
