import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logop.png"   // put your logo in public/logo.png
            alt="Course Logo"
            width={200}
            height={200}
          />
          
        </div>

        {/* Nav links */}
        <nav className="flex gap-8 text-white font-medium">
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#staff" className="hover:text-pink-400 transition">Staff</a>
          <a href="#schedule" className="hover:text-pink-400 transition">Schedule</a>
          <a href="#assignments" className="hover:text-pink-400 transition">Assignments</a>
        </nav>

      </div>
    </header>
  );
}
