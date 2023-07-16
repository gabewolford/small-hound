import About from "./InfoComponents/About";
import Clients from "./InfoComponents/Clients";
import Logo from "./InfoComponents/Logo";
import Services from "./InfoComponents/Services";

export default function Info() {
    return (
        <section className="flex flex-col lg:flex-row items-start gap-[36px] lg:gap-[18px] mb-24 md:mb-0">
            <Logo />
            <About />
            <Services />
            <Clients />
        </section>
    )
}