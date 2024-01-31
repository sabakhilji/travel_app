import Image from "next/image";
import React from "react";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
   <div className="relative hero-map w-1/2">
  {/* Overlay content here */}
  <div className="relative flex flex-1 items-center">
        <div className="relative z-20 w-[175px] flex flex-col gap-4 rounded-3xl bg-green-90 px-4 py-5">
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <p className="regular-14 block text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-16 text-white">Aguas Calientes</p>
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex flex-col">
              <p className="regular-14 block text-gray-20">Distance</p>
              <p className="bold-16 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-14 block text-gray-20">Elevation</p>
              <p className="bold-16 text-white">2.040 km</p>
            </div>
          </div>
        </div>
        </div>
      {/* ... location details ... */}
    </div>
  

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 padding-container ">
        <Image
          src="/logo.svg"
          alt="camp"
          width={25}
          height={25}
          className="absolute left-15 top-[-80px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-40 lg:bold-52 custom-margin grid">
          <span>Putuk Truno</span>
          <span>Camp Area</span>
        </h1>
        <p className="regular-14 mt-4 text-gray-30 grid xl:max-w-[520px]">
         <span>We want to be on each of your journeys seeking the satisfaction of</span>
          <span>seeing the incorruptible beauty of nature. We can help you on an</span>
          <span>adventure around the world in just one app</span>
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" text="Download App" variant="btn_green" />
          <Button
            type="button"
            text="How we work?"
            variant="btn_white_text"
            icon="/play.svg"
          />
        </div>
      </div>

    { /* <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <p className="regular-16 block text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
              </div>*/}
    </section>
  );
};

export default Hero;