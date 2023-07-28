import Image from "next/image"

export default function SizzleReel() {
    return(
        <section className="mx-auto my-20">
            <figure>
                <Image
                    src="/images/typing-cat-omar.gif"
                    height={1000}
                    width={1000}
                    alt="typing cat gif"
                >
                </Image>
                <figcaption className="mt-4">
                    <p>Cooking up a sizzle reel for you.</p>
                    <p>Check back soon...</p>
                </figcaption>
            </figure>
        </section>
    )
}