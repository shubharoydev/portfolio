import React, { useState } from 'react';
import {
  FaCode,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaCuttlefish,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaNodeJs
} from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiTailwindcss, SiMongodb, SiRedis, SiPostman, SiVite } from 'react-icons/si';
import Particles from '../bg-style/Particles';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="aboutme"
      className="relative bg-gradient-to-b from-black to-gray-900 py-16 sm:py-24 overflow-hidden"
    >
      {/* Enhanced Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ff94b4', '#3a29ff', '#00ffff', '#ff00ff']}
          particleCount={3000}
          particleSpread={15}
          speed={0.15}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          particleShape="mixed"
          responsive={true}
        />
      </div>

      <div className="relative z-10 px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <div className="relative group">
            <div className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white/10 overflow-hidden transform transition-all duration-500 hover:shadow-glow hover:border-purple-400/30">
              <img
                src="https://ik.imagekit.io/un5p4k39x/my%20photo.jpg?updatedAt=1747583727239"
                alt="Shubha Roy, Fullstack Developer"
                className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">Shubha Roy</p>
                <p className="text-sm font-light text-gray-300">Fullstack Developer</p>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="flex flex-col justify-center">
            <div className="relative bg-gray-800/50 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl"></div>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed relative z-10">
                <FaRocket className="inline-block text-pink-500 mr-2 mb-1 animate-float" />
                I'm Shubha Roy, a passionate developer with a love for creating innovative and user-friendly solutions. With a strong foundation in modern web technologies, I thrive on transforming ideas into reality through clean code and thoughtful design. My journey in tech has been driven by curiosity and a commitment to continuous learning, allowing me to tackle diverse projects with confidence and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Languages Used",
              icon: <FaCode className="w-8 h-8 text-blue-300 mr-3" />,
              items: [
                { icon: <FaJs className="w-5 h-5 text-yellow-300 mr-2" />, text: "JavaScript" },
                { icon: <FaPython className="w-5 h-5 text-blue-400 mr-2" />, text: "Python" },
                { icon: <FaHtml5 className="w-5 h-5 text-orange-400 mr-2" />, text: "HTML5" },
                { icon: <FaCss3Alt className="w-5 h-5 text-blue-500 mr-2" />, text: "CSS3" },
                { icon: <FaCuttlefish className="w-5 h-5 text-blue-600 mr-2" />, text: "C/C++" },
              ],
              accent: "blue-300"
            },
            {
              title: "Frameworks Used",
              icon: <FaReact className="w-8 h-8 text-purple-300 mr-3" />,
              items: [
                { icon: <FaReact className="w-5 h-5 text-cyan-400 mr-2" />, text: "React" },
                // { icon: <SiNextdotjs className="w-5 h-5 text-gray-200 mr-2" />, text: "Next.js" },
                {icon: <FaNodeJs className="w-5 h-5 text-green-600 mr-2" />, text: "Node.js"},
                { icon: <SiExpress className="w-5 h-5 text-gray-400 mr-2" />, text: "Express.js" },
                { icon: <SiTailwindcss className="w-5 h-5 text-teal-400 mr-2" />, text: "Tailwind CSS" },
              ],
              accent: "purple-300"
            },
            {
              title: "Tools Used",
              icon: <FaTools className="w-8 h-8 text-teal-300 mr-3" />,
              items: [
                { icon: <FaGitAlt className="w-5 h-5 text-orange-400 mr-2" />, text: "Git" },
                { icon: <FaGithub className="w-5 h-5 text-gray-200 mr-2" />, text: "GitHub" },
                { icon: <SiPostman className="w-5 h-5 text-orange-300 mr-2" />, text: "Postman" },
                { icon: <FaDocker className="w-5 h-5 text-blue-400 mr-2" />, text: "Docker" },
                { icon: <SiVite className="w-5 h-5 text-purple-400 mr-2" />, text: "Vite" },
              ],
              accent: "teal-300"
            },
            {
              title: "Databases Used",
              icon: <FaDatabase className="w-8 h-8 text-green-300 mr-3" />,
              items: [
                { icon: <SiMongodb className="w-5 h-5 text-green-400 mr-2" />, text: "MongoDB" },
                { icon: <SiRedis className="w-5 h-5 text-red-400 mr-2" />, text: "Redis" },
              ],
              accent: "green-300"
            },
            {
              title: "Education",
              icon: <FaGraduationCap className="w-8 h-8 text-pink-300 mr-3" />,
              content: (
                <p className="text-gray-200">
                  B.Tech in Electronics and Communication Engineering<br />
                  Techno India University, 2024-2028
                </p>
              ),
              accent: "pink-300"
            },
            {
              title: "Projects",
              icon: <FaBriefcase className="w-8 h-8 text-yellow-300 mr-3" />,
              content: (
                <>
                  <p className="text-gray-200 mb-3">
                    <span className="text-2xl font-bold text-white">5+</span> projects completed using modern technologies
                  </p>
                  <ul className="text-gray-200 space-y-1">
                    <li className="flex items-center">
                      <FaReact className="w-5 h-5 text-cyan-400 mr-2" />
                      React
                    </li>
                    {/* <li className="flex items-center">
                      <SiNextdotjs className="w-5 h-5 text-gray-200 mr-2" />
                      Next.js
                    </li> */}
                    <li className="flex items-center">
                      <SiTailwindcss className="w-5 h-5 text-teal-400 mr-2" />
                      Tailwind CSS
                    </li>
                    <li className="flex items-center">
                      <SiExpress className="w-5 h-5 text-gray-400 mr-2" />
                      Express.js
                    </li>
                  </ul>
                </>
              ),
              accent: "yellow-300"
            }
          ].map((card, index) => (
            <div
              key={index}
              className="relative bg-transparent p-6 rounded-xl shadow-xl backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-br hover:from-white/10 hover:to-gray-700/10"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-center mb-4">
                {card.icon}
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              </div>
              {card.items ? (
                <ul className="text-gray-200 space-y-2 relative z-10">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="relative z-10">
                  {card.content}
                </div>
              )}
              {activeCard === index && (
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute rounded-full bg-${card.accent}`}
                      initial={{
                        opacity: 0,
                        scale: 0,
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50,
                        width: Math.random() * 6 + 2,
                        height: Math.random() * 6 + 2,
                      }}
                      animate={{
                        opacity: [0, 0.3, 0],
                        scale: [0, 1, 0],
                        x: [
                          Math.random() * 100 - 50,
                          Math.random() * 100 - 50,
                          Math.random() * 100 - 50
                        ],
                        y: [
                          Math.random() * 100 - 50,
                          Math.random() * 100 - 50,
                          Math.random() * 100 - 50
                        ],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .hover\:shadow-glow:hover {
          box-shadow: 0 0 25px rgba(168, 85, 247, 0.3);
        }
      `}</style>
    </section>
  );
};

export default AboutMe;