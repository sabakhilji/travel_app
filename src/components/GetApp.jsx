import React from "react";
import Button from "../shared/Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flex justify-center items-center w-full flex-col pb-[100px]">
      <div className="mx-auto max-w-[1440px] relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 text-green-500 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-green-500">
            Available on IOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              text="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              text="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" height={870} width={550} alt="phones" />
        </div>
      </div>
    </section>
  );
};

export default GetApp;