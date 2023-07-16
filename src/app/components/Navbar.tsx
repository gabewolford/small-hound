'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [formattedTime, setFormattedTime] = useState('');
  
    useEffect(() => {
        const updateTime = (): void => {
            const currentTime: Date = new Date();
            const options: Intl.DateTimeFormatOptions = {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                timeZoneName: 'short',
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
        <nav className="grid grid-cols-13">
            <div className="col-start-1 col-end-5">
                <Link href="/" className="text-[32px] md:text-[48px] lg:text-[84px] leading-none bold">Small Hound</Link>
            </div>

            <div className="col-start-5 col-end-7 text-right md:text-start">
                <h5 className="text-sm md:text-base">Portland, OR</h5>
            </div>

            <div className="hidden md:block md:text-base col-start-9 col-end-11">
                <h5>{formattedTime}</h5>
            </div>

            <div className="hidden md:block mr-4 col-start-11 col-end-13 text-right">
                <Link href="mailto:hi@smallhound.co" className="text-white bold bg-red p-4 rounded-full">Get in touch</Link>
            </div>
        </nav>
    )
  }