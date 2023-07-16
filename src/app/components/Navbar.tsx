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
            <nav className="flex justify-between">
                <div>
                    <Link href="/" className="text-[32px] lg:text-[84px] leading-none bold">Small Hound</Link>
                </div>

                <div className="md:mr-36">
                    <h5 className="text-sm md:text-base">Portland, OR</h5>
                </div>
        
                <div className="hidden md:inline-block md:mr-12">
                    <h5>{formattedTime}</h5>
                </div>

                <div className="hidden md:inline-block mr-4">
                    <Link href="mailto:hi@smallhound.co" className="text-white bold bg-red p-4 rounded-full">Get in touch</Link>
                </div>
            </nav>
    )
  }