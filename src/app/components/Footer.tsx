import Link from "next/link"

export default function Footer() {
    return(
        // <footer className="flex flex-col md:flex-row justify-between text-sm mt-11 pb-4">
        <footer className="flex flex-col md:grid md:grid-cols-12 md:mt-11 pb-4 text-sm">
            <div className="col-span-3">
                <h5>© 2023 Small Hound</h5>
            </div>
            
            <div className="col-span-3 md:ml-10">
                <Link href="mailto:hi@smallhound.co">hi@smallhound.co</Link>
            </div>

            <div className="col-span-3 md:ml-12">
                <h5>Full site coming soon.</h5>
            </div>


        </footer>
    )
}