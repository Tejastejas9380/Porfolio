export default function Projects() {
  const projects = [
    {
      title: "Futuristic Dashboard",
      description:
        "A modern analytics dashboard with real-time data visualization and interactive elements.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "D3.js", "Node.js"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "AI-Powered App",
      description:
        "An intelligent mobile application with machine learning capabilities and intuitive UX.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Python", "TensorFlow", "Flutter"],
      color: "from-pink-500 to-fuchsia-400",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A complete e-commerce solution with modern design and seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Next.js", "Stripe", "MongoDB"],
      color: "from-purple-500 to-violet-400",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-4 bg-black overflow-hidden"
    >
      {/* --- Background Nebula Glow --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-backgroundMove opacity-90 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,0,255,0.1),transparent_70%)] -z-10" />

      {/* --- Section Header --- */}
      <div className="text-center mb-20 animate-fadeInUp">
        <h2 className="text-4xl sm:text-5xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 bg-clip-text text-transparent animate-glow">
          Featured Projects
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-white/80 text-sm sm:text-lg leading-relaxed">
          Explore a galaxy of innovations — crafted using modern frameworks, sleek
          UI design, and performance-first architecture.
        </p>
      </div>

      {/* --- Projects Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeInUp">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:shadow-cyan-500/20 transform transition-all duration-500 hover:scale-105 animate-breathe"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3
                className={`text-xl font-bold font-orbitron bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-3`}
              >
                {project.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button className="w-full mr-2 py-2 text-xs rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:brightness-110 transition duration-300">
                  <i className="fab fa-github mr-1" /> Code
                </button>
                <button className="w-full ml-2 py-2 text-xs rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-black font-semibold hover:brightness-110 transition duration-300">
                  <i className="fas fa-external-link-alt mr-1" /> Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
