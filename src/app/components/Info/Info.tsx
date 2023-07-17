import About from "./InfoComponents/About";
import Clients from "./InfoComponents/Clients";
import Logo from "./InfoComponents/Logo";
import Services from "./InfoComponents/Services";

export default function Info() {
    return (
        <section className="flex flex-col lg:grid lg:grid-cols-12 gap-[36px] mb-24 md:mb-0">
            <Logo />
            <About />
            <Services />
            <Clients />
        </section>
    )
}