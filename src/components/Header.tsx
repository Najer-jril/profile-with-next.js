import Link from "next/link";

export default function Header() {
    return (
        <header className="p-6 bg-darkbg shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl text-header-text font-bold">Nazril.Ilham</h1>
                <nav className="space-x-4">
                    <Link href="#about" className="text-header-text hover:underline hover:text-header-text-hover">
                        About
                    </Link>
                    <Link href="/projects" className="text-header-text hover:underline hover:text-header-text-hover">
                        Projects
                    </Link>
                    <Link href="#contact" className="text-header-text hover:underline hover:text-header-text-hover">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
