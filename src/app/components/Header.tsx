'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { apercuBold } from "../styles/fonts";

export default function Header(): JSX.Element {
  const [formattedTime, setFormattedTime] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = (): void => {
      const currentTime: Date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZoneName: "short",
        timeZone: "America/Los_Angeles",
      };
      const newFormattedTime: string = currentTime.toLocaleString(undefined, options);
      setFormattedTime(newFormattedTime);
    };

    updateTime();

    const interval: NodeJS.Timeout = setInterval(updateTime, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className=" py-8">
    <div className="flex flex-row justify-between items-start">
      <h1 className={`${apercuBold.className} text-[32px] md:text-[64px] lg:text-[128px] xl:text-[160px] leading-none"`}>Small&nbsp;Hound</h1>
      <div className="flex flex-row justify-between pl-8 gap-8">  
        <h5 className={`pt-4 hidden md:inline-block`}>{formattedTime}</h5>
        <Link href="mailto:hi@smallhound.co" className="p-4 text-white bg-red rounded-full">Get in touch</Link>
      </div>
    </div>
    </header>
  );
}

