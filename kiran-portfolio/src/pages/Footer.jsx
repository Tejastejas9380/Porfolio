import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/kiranms", color: "from-blue-500 to-purple-600" },
    { icon: <FaGithub />, href: "https://github.com/kiranms", color: "from-gray-700 to-gray-900" },
    { icon: <FaInstagram />, href: "https://instagram.com/kiranms", color: "from-pink-500 to-yellow-500" },
    { icon: <FaTwitter />, href: "https://twitter.com/kiranms", color: "from-cyan-400 to-blue-600" },
  ];

    return (
      
      <footer className="w-full py-10 px-4 bg-black bg-opacity-80 backdrop-blur-md border-t border-cyan-500">
          
      <div className="max-w-6xl mx-auto text-center animate-breathe">
        <h3 className="text-transparent text-3xl font-bold bg-gradient-to-r from-pink-500 via-cyan-400 to-violet-500 bg-clip-text mb-6 animate-glow">
          Connect with Me
              </h3>
              

        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${link.color} shadow-xl hover:scale-110 transform transition-all duration-300 flex items-center justify-center animate-float`}
            >
              <span className="text-white text-xl">{link.icon}</span>
            </a>
          ))}
        </div>

        <p className="text-gray-400 text-sm tracking-wide">
          &copy; {new Date().getFullYear()} <span className="text-cyan-400">Kiran M.S.</span> — All rights reserved.
        </p>
        <p className="text-gray-600 mt-1 text-xs">Designed with 💙 using React + Tailwind + Cyberpunk magic</p>
      </div>
    </footer>
  );
}

