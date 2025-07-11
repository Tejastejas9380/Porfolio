import { useEffect, useRef } from "react";

export default function About() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-bar");
            bars.forEach((bar, index) => {
              const width = [95, 90, 85, 80][index];
              setTimeout(() => {
                bar.style.width = `${width}%`;
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-4 min-h-screen flex items-center bg-black relative z-0"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-90 animate-backgroundMove"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,255,0.2),transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeInUp">
        {/* Left: Bio */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl hover:shadow-cyan-500/20 transition-shadow duration-500">
          <h2 className="text-4xl sm:text-5xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 bg-clip-text text-transparent animate-glow mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-4">
            I’m a futuristic developer, passionate about bridging imagination and
            engineering — creating immersive digital universes using powerful web
            technologies.
          </p>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed">
            With a blend of Python logic and web artistry, I sculpt engaging,
            responsive, and intelligent applications that don't just work — they
            wow.
          </p>
        </div>

        {/* Right: Skills */}
        <div
          ref={skillsRef}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl hover:shadow-pink-500/20 transition-shadow duration-500"
        >
          <h3 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-glow mb-6">
            Skills & Expertise
          </h3>
          <div className="space-y-5">
            {[
              { name: "Web Development", icon: "fab fa-react", color: "bg-cyan-400" },
              { name: "Python", icon: "fab fa-python", color: "bg-yellow-400" },
              { name: "UI/UX Design", icon: "fas fa-palette", color: "bg-fuchsia-400" },
              { name: "Mobile Development", icon: "fas fa-mobile-alt", color: "bg-green-400" },
            ].map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/90 font-medium text-base flex items-center gap-2">
                    <i className={`${skill.icon} text-cyan-300`}></i> {skill.name}
                  </span>
                  <span className="text-white/70 text-sm">{[95, 90, 85, 80][index]}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className={`skill-bar ${skill.color} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
