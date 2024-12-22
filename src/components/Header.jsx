import React from "react";
import Container from "./Container";
import { rightNav, leftNav } from "@/static/navigation";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import FillLogo from "./icons/FillLogo";

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-500 border-opacity-20">
      <Container className="flex justify-between items-center">
        <nav>
          <ul className="flex justify-between items-center gap-6">
            {leftNav.map((navItem) => (
              <li key={navItem.name}>
                <a href={navItem.href} className="text-sm">
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="flex justify-center items-center" href={"/"}>
          <FillLogo />
          <span className="ml-3 font-mono font-medium">Promptverse</span>
          <span className="ml-1">AI</span>
        </Link>
        <nav>
          <ul className="flex justify-between items-center gap-6">
            {rightNav.map((navItem) => (
              <li key={navItem.name}>
                <a href={navItem.href} className="text-sm">
                  {navItem.name}
                </a>
              </li>
            ))}
            <li>
              <Link href="/ddd">
                <PrimaryButton>Get Started</PrimaryButton>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
