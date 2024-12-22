import React from "react";

const Logo = ({ className, style }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8697 1.30974C15.2337 -0.436256 12.7657 -0.436256 12.1297 1.30974L9.24374 9.24374L1.30974 12.1297C-0.436256 12.7657 -0.436256 15.2337 1.30974 15.8697L9.24374 18.7557L12.1297 26.6897C12.7657 28.4357 15.2337 28.4357 15.8697 26.6897L18.7557 18.7557L26.6897 15.8697C28.4357 15.2337 28.4357 12.7657 26.6897 12.1297L18.7557 9.24374L15.8697 1.30974Z"
        fill="#CCCCCC"
      />
    </svg>
  );
};

export default Logo;