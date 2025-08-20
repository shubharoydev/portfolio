import React, { useState } from "react";
import BackgroundBeamsWithCollision from "../bg-style/BackgroundBeamsWithCollison";

// ProjectCard component for individual project cards
const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.shortDesc}</p>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.longDesc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full"
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
{
  id: 3,
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
  id: 4,
  title: "Subscription Model Backend",
  image:
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
  shortDesc: "A secure backend for subscription management with reminders, authentication, and email workflows.",
  longDesc:
    "Built with Node.js, Express, and MongoDB, this backend service manages subscriptions, user authentication, and automated renewal reminders. It integrates Nodemailer for email notifications, QStash for scheduling workflows, and Arcjet for bot protection and rate limiting. Designed for scalability and security, it ensures smooth subscription handling with real-time reminders and persistent data storage.",
  projectLink: "https://subscription-model-backend.onrender.com",
  githubLink: "https://github.com/shubharoydev/subscription-model-backend",
  tags: ["Node.js", "Express", "MongoDB", "Nodemailer", "QStash", "Arcjet"],
}

];

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <BackgroundBeamsWithCollision>
      <div
        id="mywork"
        className="py-16 px-4 max-w-7xl mx-auto min-h-screen flex flex-col justify-center"
      >
<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-100 tracking-tight">
  <span className="relative inline-block">
    My Projects
    <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
  </span>
</h2>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projects.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full overflow-hidden group transition-all duration-300 hover:bg-blue-700"
            >
              <span className="relative z-10">
                {showAll ? "Show Less" : "View More Projects"}
              </span>
              <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
          </div>
        )}
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default MyWork;