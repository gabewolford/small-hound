import About from "./About";
import Clients from "./Clients";
import Logo from "./Logo";
import Services from "./Services";

export default function Info() {
    return (
        <section className="flex flex-col md:flex-row items-start gap-[18px]">
            <Logo />
            <About />
            <Services />
            <Clients />
        </section>
    )
}