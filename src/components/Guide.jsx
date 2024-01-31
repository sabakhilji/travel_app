import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/logo.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-14 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Imagine conquering mountain peaks and exploring lush valleys - all
            without a signal! Our app&apos;s offline maps ensure you never get
            lost. Grab your friends, family, and adventure spirit - it&apos;s
            time to hit the wilderness!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto max-w-[1440px] w-full relative">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl "
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 z-99">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex justify-between items-center flex-col">
            <div className="flex w-full flex-col">
              <div className="flex justify-between items-center w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 minutes</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;