import { apercuMedium } from "@/app/styles/fonts"

export default function Services() {
    return (
        <div className="lg:col-span-3 flex flex-col md:px-8 gap-4 border-red md:border-l md:border-t-0 border-t pt-[18px] md:pt-0 self-stretch flex100">
            <h2 className={`text-[24px] leading-[38.40px] ${apercuMedium.className}`}>Services</h2>
            <ul className="leading-6">
                <li>UI & UX Design</li>
                <li>End-to-End Product Design</li>
                <li>Product Strategy</li>
                <li>Brand Identity & Expression</li>
                <li>Mobile-First Web Design</li>
                <li>Full Stack Web Development</li>
                <li>Front End Development</li>
                <li>Headless Development</li>
            </ul>
        </div>
    )
}