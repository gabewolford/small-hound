import Link from "next/link";

export default function Navbar() {
    const currentTime: Date = new Date();
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true, timeZoneName: 'short' };
    const formattedTime: string = currentTime.toLocaleString(undefined, options);

    return (
            <nav className="flex justify-between items-start">
                <div>
                    <Link href="/" className="text-[32px] lg:text-[84px] leading-none bold">Small Hound</Link>
                </div>

                <div>
                    <h5>Portland, OR</h5>
                </div>
        
                <div className="hidden md:block">
                    <h5>{formattedTime}</h5>
                </div>

                <button className="hidden md:block">
                    <Link href="mailto:hi@smallhound.co" className="text-white bold bg-red transition duration-300 ease-in-out rounded-full p-4 w-fit">Get in touch</Link>
                </button>
            </nav>
    )
  }