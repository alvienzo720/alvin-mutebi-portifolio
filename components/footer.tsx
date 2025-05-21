import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              ALVIN MUTEBI
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Software Developer & Tech Speaker
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="#home" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#speaking"
              className="hover:text-white transition-colors"
            >
              Speaking
            </Link>
            <Link
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} Alvin Mutebi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
