import Image from "next/image";
import Link from "next/link";
import React from "react";

const FOOTER_LINKS = [
    {
      title: "Learn More",
      links: [
        "About faire mon voyage",
        "Press Releases",
        "Environment",
        "Jobs",
        "Privacy Policy",
        "Contact Us",
      ],
    },
    {
      title: "Our Community",
      links: ["Climbing ", "Hiking ", "Cycling"],
    },
  ];

const FOOTER_CONTACT_INFO = {
    title: "Contact Us",
    links: [
      { label: "Admin Officer", value: "***-***-****" },
      { label: "Email Officer", value: "fairmon_voyage@saba.com" },
    ],
  };

const SOCIALS = {
    title: "Social",
    links: [
      "/facebook.svg",
      "/instagram.svg",
      "/twitter.svg",
      "/youtube.svg",
      "/wordpress.svg",
    ],
  };  
  
const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex justify-center items-center mb-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="logo2.svg" alt="logo" height={100} width={100} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, index) => (
                    <Link href="/" key={index}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link, index) => (
                    <Link key={index} href="/">
                      <Image src={link} alt="logo" height={24} width={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
