import Link from "next/link"

export default function Footer() {
    return(
        <footer className="absolute bottom-0 ml-4 md:ml-8">
            <div className="">
                <div className="col-span-1">
                    <h5>© 2023 Small Hound</h5>
                </div>

                <div className="col-span-1">
                    <Link href="mailto:hi@smallhound.co">hi@smallhound.co</Link>
                </div>

                <div className="col-span-1">
                    <h5>Full site coming soon.</h5>
                </div>
                
                <div className="col-span-1">
                    <h5>Privacy Policy</h5>
                </div>
            </div>
        </footer>

        
    )
}