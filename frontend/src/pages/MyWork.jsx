import React, { useState } from "react";
import BackgroundBeamsWithCollision from "../bg-style/BackgroundBeamsWithCollison";
import { motion } from "framer-motion";

// ProjectCard component for individual project cards
const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative bg-gray-800/30 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-600/20 hover:border-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent md:bg-gradient-to-r"></div>
        </div>
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4 font-light">{project.shortDesc}</p>
          <div className={`text-gray-400 text-sm mb-4 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
            {project.longDesc}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors mb-4 self-start"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-blue-600/30 text-blue-200 px-2 py-1 rounded-full border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Doctor Appointment Booking System",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
    shortDesc: "A MERN-based healthcare platform for doctor profiles, scheduling, and secure appointment booking.",
    longDesc:
      "A robust MERN stack web application designed for seamless healthcare booking. It enables patients to register, search doctors, and book appointments, while doctors can manage profiles, availability, and appointment history. Features include OTP-based authentication, role-based access, image uploads via Cloudinary, GraphQL API integration, and Redis caching for optimized search performance. Secure sessions are managed with JWT tokens, ensuring a scalable and efficient healthcare solution.",
    projectLink: "https://medilynk.vercel.app",
    githubLink: "https://github.com/shubharoydev/Doctor-Appointment-Booking",
    tags: ["MERN", "Node.js", "Express", "MongoDB", "Redis", "GraphQL", "Tailwind CSS", "Cloudinary"],
  },
  {
    id: 2,
    title: "Subscription Model Backend",
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
    shortDesc: "A secure backend for subscription management with reminders, authentication, and email workflows.",
    longDesc:
      "Built with Node.js, Express, and MongoDB, this backend service manages subscriptions, user authentication, and automated renewal reminders. It integrates Nodemailer for email notifications, QStash for scheduling workflows, and Arcjet for bot protection and rate limiting. Designed for scalability and security, it ensures smooth subscription handling with real-time reminders and persistent data storage.",
    projectLink: "https://subscription-model-backend.onrender.com",
    githubLink: "https://github.com/shubharoydev/subscription-model-backend",
    tags: ["Node.js", "Express", "MongoDB", "Nodemailer", "QStash", "Arcjet"],
  },
  {
    id: 3,
    title: "AI-Powered Distributed Chat Application",
    image:
      "https://images.unsplash.com/photo-1614680376739-414d95ff43df?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "A production-ready, distributed real-time chat application powered by AI, Kafka, Redis, MongoDB, and Socket.IO, built for scalability and fault tolerance.",

    longDesc:
      "A high-performance, distributed real-time chat platform engineered with a Real-Time First + Asynchronous Persistence architecture to deliver instant messaging at scale. Users receive messages immediately through Socket.IO while Redis caches recent conversations for ultra-fast retrieval. Apache Kafka (3-broker cluster with Aiven Cloud support) decouples real-time delivery from database persistence, enabling reliable asynchronous processing with zero message loss guarantees. A dedicated background worker performs intelligent batch writes to MongoDB using idempotent upserts, committing Kafka offsets only after successful persistence for maximum durability. The system features automatic retry mechanisms, backup Redis queues, self-healing cache repair, worker pause/resume flow control, JWT-secured authentication, and comprehensive monitoring. AI-powered conversations are seamlessly integrated through the Gemini API, allowing users to trigger intelligent responses using the '/ai' command. Built with a modern React + Vite + Tailwind CSS frontend and a scalable Node.js backend, the application is optimized for cloud-native deployments, horizontal scaling, and high-throughput distributed environments.",

    projectLink: "https://chatify-chi-nine.vercel.app/",
    githubLink: "https://github.com/shubharoydev/ai-chat-app",

    tags: [
      "Node.js",
      "Express",
      "Socket.IO",
      "Apache Kafka",
      "Redis",
      "MongoDB",
      "Gemini API",
      "JWT",
      "Docker",
      "Docker Compose",
      "Aiven Kafka",
      "React",
      "Vite",
      "Tailwind CSS",
      "Distributed Systems",
      "Event-Driven Architecture"
    ],
  },
  {
    id: 4,
    title: "AI Supply Chain Management System",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",

    shortDesc:
      "An AI-powered supply chain platform featuring real-time shipment tracking, predictive delay analysis, intelligent route optimization, and proactive logistics risk management.",

    longDesc:
      "A comprehensive AI-driven Supply Chain Management platform built with a scalable microservices architecture to optimize logistics operations through real-time monitoring, machine learning, and intelligent automation. The system enables live shipment tracking using Socket.IO, predictive delay analysis powered by a HistGradientBoostingRegressor model served through FastAPI, and dynamic route optimization by combining real-time traffic, weather, and routing data from TomTom, OpenRoute Service, and OpenWeatherMap. Redis-backed multi-layer caching significantly improves performance while MongoDB provides reliable persistence for shipment and operational data. Advanced features such as corridor-based cascade failure prevention, calibrated risk scoring, automated route re-routing, HTML email alerts, and Gemini AI-powered logistics advisory allow supply chain managers to proactively mitigate disruptions before they occur. JWT authentication, Redis-based session management, Zod validation, Helmet security, Arcjet rate limiting, and comprehensive API integrations ensure a secure and resilient backend. The frontend, built with React, Vite, Tailwind CSS, and MapLibre GL, delivers an interactive dashboard with live map visualization, driver monitoring, AI-assisted decision support, and real-time operational insights. Designed as an intelligent logistics platform, the system demonstrates modern distributed application design, AI-assisted decision making, and real-time event-driven architecture suitable for next-generation supply chain management.",

    projectLink: "https://smartsupplychain-two.vercel.app/",
    githubLink:
      "https://github.com/shubharoydev/AI_supply_chain_management_system",

    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "FastAPI",
      "Python",
      "Scikit-Learn",
      "Machine Learning",
      "Gemini AI",
      "JWT",
      "MapLibre GL",
      "OpenRoute Service",
      "TomTom API",
      "OpenWeatherMap API",
      "Nodemailer",
      "Arcjet",
      "Microservices",
      "AI",
      "Supply Chain",
      "Real-Time Systems"
    ],
  },
  {
    id: 5,
    title: "Octave Docker Project",
    image: "https://media.istockphoto.com/id/1413243610/photo/business-woman-with-finger-pressing-matlab-button-on-virtual-screens.jpg?s=612x612&w=0&k=20&c=JSHU9jPgth3vz9AaCH5lQXb2ZwKTOMmUUps2G28OP_k=",
    shortDesc: "Beginner-friendly Docker setup to run GNU Octave as a lightweight MATLAB alternative.",
    longDesc:
      "This project provides a Docker-based setup for running GNU Octave scripts seamlessly in Visual Studio Code with PowerShell. Designed for Windows users, it features automated graphics toolkit selection, lightweight containers, and headless PNG plotting. Scripts and outputs are stored locally, making it both efficient and beginner-friendly for data visualization and numerical computing.",
    projectLink: "https://github.com/shubharoydev/Octave-Docker-Project",
    githubLink: "https://github.com/shubharoydev/Octave-Docker-Project",
    tags: ["Docker", "GNU Octave", "VS Code", "PowerShell"],
  },
    {
    id: 6,
    title: "Modern Portfolio",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    shortDesc: "A sleek personal portfolio website showcasing my work and skills.",
    longDesc:
      "Built with React, Node.js, and Tailwind CSS, this portfolio highlights my projects and skills with a clean, modern design. It features responsive layouts, smooth animations, and easy navigation for an engaging user experience.",
    projectLink: "https://shubharoydev.vercel.app",
    githubLink: "https://github.com/shubharoydev/portfolio",
    tags: ["React", "Node.js", "Express.js", "Tailwind CSS"],
  },
];

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <BackgroundBeamsWithCollision>
      <div
        id="mywork"
        className="py-16 px-4 max-w-7xl mx-auto min-h-screen flex flex-col justify-center"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-100 tracking-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="relative inline-block">
            My Projects
            <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse" />
          </span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {displayedProjects.map((project) => (
            <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        {projects.length > 4 && (
          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </motion.div>
        )}
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default MyWork;