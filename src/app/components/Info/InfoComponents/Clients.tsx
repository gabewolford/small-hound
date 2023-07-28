import Link from "next/link"
import { apercuMedium } from "@/app/styles/fonts"

export default function Clients() {
    return (
        <div className="lg:col-span-3 flex flex-col md:px-8 gap-4 border-red md:border-l md:border-t-0 border-t pt-[18px] md:pt-0 self-stretch flex100">
            <h2 className={`text-[24px] leading-[38.40px] ${apercuMedium.className}`}>Clients</h2>
            <ul className="leading-6">
                <li>
                    <Link href="https://www.morf.health/" target="_blank">Morf Health</Link>
                </li>
                <li>
                    <Link href="https://www.firstrepublic.com/" target="_blank">First Republic Bank</Link>
                </li>
                <li>
                    <Link href="https://islamoradafishingguidesandcharters.com/" target="_blank">Islamorada Fishing</Link>
                </li>
                <li>
                    <Link href="https://www.arist.co/" target="_blank">Arist</Link>
                </li>
                <li>
                    <Link href="https://www.junecare.co/" target="_blank">June Care</Link>
                </li>
                <li>
                    <Link href="https://www.parsleyhealth.com/" target="_blank">Parsley Health</Link>
                </li>
                <li>
                    <Link href="https://burrow.com/" target="_blank">Burrow</Link>
                </li>
                <li>
                    <Link href="https://www.amazon.com/" target="_blank">Amazon Alexa</Link>
                </li>
            </ul>
        </div>
    )
}