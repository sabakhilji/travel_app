import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../shared/Button";
const NAV_LINKS = [
    { href: "/", key: "home", label: "Home" },
    { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
    { href: "/", key: "services", label: "Services" },
    { href: "/", key: "pricing ", label: "Pricing " },
    { href: "/", key: "contact_us", label: "Contact Us" },
  ];
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <Image src="logo2.svg" width={74} height={29} alt="logo" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-base font-normal text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Button
          type="button"
          text="Login"
          icon="/user.png"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default NavBar;