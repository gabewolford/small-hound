import Link from "next/link"

export default function Footer() {
    return(
        <footer className="mt-auto flex flex-col md:flex-row justify-between md:mr-4 text-sm">
            <div>
                <Link href="mailto:hi@smallhound.co">hi@smallhound.co</Link>
            </div>

            <div>
                <h5>Full site coming soon.</h5>
            </div>

            <div>
                <h5>© 2023 Small Hound</h5>
            </div>
        </footer>
    )
}