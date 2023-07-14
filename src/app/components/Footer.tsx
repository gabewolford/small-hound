import Link from "next/link"

export default function Footer() {
    return(
        <footer className="absolute bottom-4 md:bottom-8 text-sm">
            <div>
                <h5>© 2023 Small Hound</h5>
            </div>

            <div>
                <Link href="mailto:hi@smallhound.co">hi@smallhound.co</Link>
            </div>

            <div>
                <h5>Full site coming soon.</h5>
            </div>
            
            <div>
                <h5>Privacy Policy</h5>
            </div>
        </footer>
    )
}