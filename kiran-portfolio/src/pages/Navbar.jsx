import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-lg animate-fadeInDown">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 bg-clip-text text-transparent animate-glow">
          KMS
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          {["home", "about", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`transition-all duration-300 text-sm lg:text-base font-medium ${
                activeSection === id
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-white hover:text-cyan-300"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle with SVG Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white transition duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // Close (X) icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-black/80 backdrop-blur-md border-t border-gray-700`}
      >
        <div className="flex flex-col px-4 py-3 space-y-3">
          {["home", "about", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-left text-white text-base font-medium transition-colors duration-200 ${
                activeSection === id ? "text-cyan-400" : "hover:text-cyan-400"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
