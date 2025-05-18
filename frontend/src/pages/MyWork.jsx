import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import BackgroundBeamsWithCollision from "../bg-style/BackgroundBeamsWithCollison";

const projects = [
  {
    id: 1,
    title: "Doctor appointment Booking Platform",
    image: "https://plus.unsplash.com/premium_photo-1661757046446-19c281be7c9f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDesc: "A full-stack doctor appointment booking with authentication and authorization features",
    longDesc: "Built with React, Node.js, and MongoDB this platform offers a seamless booking experience with real-time inventory updates.",
    projectLink: "https://doctor-appointment-booking-bice.vercel.app",
    githubLink: "https://github.com/shubharoydev/Doctor-Appointment-Booking",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Modern Portfolio",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
    shortDesc: "A productivity app for task organization and tracking.",
    longDesc: "Developed using Next.js and Firebase, this app features drag-and-drop task boards, real-time collaboration, and notifications.",
    projectLink: "https://example.com/taskapp",
    githubLink: "https://github.com/example/taskapp",
    tags: ["React", "Node.js","Expree.js", "Tailwind CSS"],
  },
];

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <BackgroundBeamsWithCollision>
      <div id="mywork" className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-200">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projects.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition"
            >
              {showAll ? "Show Less" : "View More Projects"}
            </button>
          </div>
        )}
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default MyWork;