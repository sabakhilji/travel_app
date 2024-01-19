import Image from "next/image";
import React from "react";

const Button = ({ type, text, icon, variant, full }) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-3 rounded-full border ${variant} ${
        full ? "w-full" : ""
      }`}
    >
      {icon && <Image src={icon} alt={text} width={24} height={24} />}
      <label className="text-base font-bold whitespace-nowrap cursor-pointer">
        {text}
      </label>
    </button>
  );
};

export default Button;
