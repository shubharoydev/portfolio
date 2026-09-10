import React from 'react';
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
  FaNodeJs,
  FaLaptopCode,
  FaJava,
} from 'react-icons/fa';
import { FaBrain } from "react-icons/fa";
import { SiGraphql ,SiApachekafka, SiExpress, SiTailwindcss, SiMongodb, SiRedis, SiPostman, SiVite, SiPostgresql, SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiFastapi,
  SiGithubactions,
  SiN8N,
  SiGooglecolab,
  SiScikitlearn,} from 'react-icons/si';
import Particles from '../bg-style/Particles';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import matlabIcon from "../assets/matlab-icon.png";


const AboutMe = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
  };

  return (
    <section
      id="aboutme"
      className="relative bg-gradient-to-b from-black to-gray-900 py-20 sm:py-28 overflow-hidden"
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
        <SectionHeading
          eyebrow="About"
          title="About Me"
          subtitle="A full-stack developer who believes great software is equal parts engineering and craft — scalable under the hood, effortless on the surface."
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Image Section */}
          <div className="relative group">
            <div className="relative w-full max-w-md mx-auto rounded-2xl border border-white/10 p-1 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://ik.imagekit.io/un5p4k39x/my%20photo.jpg?updatedAt=1747583727239"
                  alt="Shubha Roy, Fullstack Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-5 left-6 text-white">
                  <p className="text-2xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                      Shubha Roy
                    </span>
                  </p>
                  <p className="text-sm font-light text-gray-300">Fullstack Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="flex flex-col justify-center">
            <div className="relative p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl"></div>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed relative z-10">
                <FaRocket className="inline-block text-pink-500 mr-2 mb-1 animate-float" />
                Hi, I’m Shubha Roy, a dedicated and detail-oriented developer with a strong passion for building innovative, user-centric digital solutions. With a solid foundation in modern web technologies, I specialize in transforming ideas into high-quality, maintainable code and intuitive designs.
                Driven by curiosity and a commitment to continuous learning, I enjoy tackling diverse technical challenges with creativity, confidence, and a results-driven mindset. I strive to create experiences that are not only functional but also meaningful and engaging for users.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {[
            {
              title: "Languages Used",
              icon: <FaCode className="w-8 h-8 text-blue-300 mr-3" />,
              items: [
                { icon: <FaJs className="w-7 h-7 text-yellow-300 mr-2" />, text: "JavaScript" },
                { icon: <SiTypescript className="w-7 h-7 text-blue-500 mr-2" />, text: "TypeScript" },
                { icon: <FaPython className="w-7 h-7 text-blue-400 mr-2" />, text: "Python" },
                { icon: <FaHtml5 className="w-7 h-7 text-orange-400 mr-2" />, text: "HTML5" },
                { icon: <FaCss3Alt className="w-7 h-7 text-blue-500 mr-2" />, text: "CSS3" },
                { icon: <FaCuttlefish className="w-7 h-7 text-blue-600 mr-2" />, text: "C/C++" },
                { icon: <FaJava className="w-7 h-7 text-red-400 mr-2" />, text: "Java" },
              ],
              accent: "blue-300"
            },
            {
              title: "Frameworks Used",
              icon: <FaReact className="w-8 h-8 text-purple-300 mr-3" />,
              items: [
                { icon: <FaReact className="w-7 h-7 text-cyan-400 mr-2" />, text: "React" },
                { icon: <SiNextdotjs className="w-7 h-7 text-gray-200 mr-2" />, text: "Next.js" },
                { icon: <FaNodeJs className="w-7 h-7 text-green-600 mr-2" />, text: "Node.js" },
                { icon: <SiExpress className="w-7 h-7 text-gray-400 mr-2" />, text: "Express.js" },
                { icon: <SiFastapi className="w-7 h-7 text-green-400 mr-2" />, text: "FastAPI" },
                { icon: <SiVite className="w-7 h-7 text-purple-400 mr-2" />, text: "Vite" },
                { icon: <SiTailwindcss className="w-7 h-7 text-teal-400 mr-2" />, text: "Tailwind CSS" },
              ],
              accent: "purple-300"
            },

            {
              title: "Tools Used",
              icon: <FaTools className="w-8 h-8 text-teal-300 mr-3" />,
              items: [
                { icon: <FaGitAlt className="w-7 h-7 text-orange-400 mr-2" />, text: "Git" },
                { icon: <FaGithub className="w-7 h-7 text-gray-200 mr-2" />, text: "GitHub" },
                { icon: <SiGithubactions className="w-7 h-7 text-blue-400 mr-2" />, text: "GitHub Actions" },
                { icon: <SiPostman className="w-7 h-7 text-orange-300 mr-2" />, text: "Postman" },
                { icon: <FaDocker className="w-7 h-7 text-blue-400 mr-2" />, text: "Docker" },
                { icon: <SiApachekafka className="w-7 h-7 text-red-400 mr-2" />, text: "Apache Kafka" },
                { icon: <SiGraphql className="w-7 h-7 text-pink-500 mr-2" />, text: "GraphQL" },
                { icon: <SiN8N className="w-7 h-7 text-orange-500 mr-2" />, text: "n8n" },
                { icon: <SiGooglecolab className="w-7 h-7 text-yellow-400 mr-2" />, text: "Google Colab" },
                { icon: <img src={matlabIcon} alt="MATLAB" className="w-7 h-7 mr-2" />, text: "MATLAB" },
              ],
              accent: "teal-300"
            },
            {
              title: "Databases Used",
              icon: <FaDatabase className="w-8 h-8 text-green-300 mr-3" />,
              items: [
                { icon: <SiMongodb className="w-7 h-7 text-green-400 mr-2" />, text: "MongoDB" },
                { icon: <SiRedis className="w-7 h-7 text-red-400 mr-2" />, text: "Redis" },
                { icon: <SiPostgresql className="w-7 h-7 text-blue-500 mr-2" />, text: "Postgresql" },
                {icon: <SiMysql className="w-7 h-7 text-blue-500 mr-2" />, text: "MySQL"},
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
                    <span className="text-2xl font-bold text-white">10+</span> projects completed using modern technologies
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
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative bg-white/[0.03] p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.06] hover:border-white/20 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {card.icon}
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              </div>
              {card.items ? (
                <div className="flex flex-wrap gap-2 relative z-10 flex-1">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-center bg-gray-700/30 px-3 py-1.5 rounded-lg border border-gray-600/30 hover:border-gray-500/50 hover:bg-gray-700/50 transition-colors">
                      {item.icon}
                      <span className="text-gray-200 text-sm ml-2">{item.text}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative z-10 flex-1">
                  {card.content}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Global styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}
      </style>
    </section>
  );
};

export default AboutMe;