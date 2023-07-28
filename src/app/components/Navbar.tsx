'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { apercuBold } from "../styles/fonts";

export default function Navbar(): JSX.Element {
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

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition: number = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`py-8 flex flex-row items-center justify-between ${isScrolled ? "scrolled sticky flex flex-row justify-between" : ""}`}>
      <h1 className={`${apercuBold.className} text-[2rem] lg:text-[8rem] xl:text-[10rem] leading-none lg:pt-6 bold transition-all ease-in-out duration-500 ${isScrolled ? "lg:text-[2rem] lg:leading-none lg:pt-6 lg:bold" : ""}`}>Small&nbsp;Hound</h1>
      <div className="flex justify-between items-start pl-8 gap-8 sticky">
        <h5 className="pt-4 hidden md:inline-block">{formattedTime}</h5>
        <Link href="mailto:hi@smallhound.co" className="p-4 text-white bg-red rounded-full">Get in touch</Link>
      </div>
    </nav>
  );
}