import { apercuMedium } from "@/app/styles/fonts"

export default function About() {
    return (
        <div className="lg:col-span-3 flex flex-col md:px-8 gap-4 border-red md:border-l md:border-t-0 border-t pt-[18px] md:pt-0 self-stretch flex100">
            <h2 className={`text-[24px] leading-[38.40px] ${apercuMedium.className}`}>Indepedent digital product&nbsp;&&nbsp;web&nbsp;studio.</h2>
            <p className="leading-6">We partner with our clients to craft digital experiences that connect people to their products and services.</p>
        </div>
    )
}