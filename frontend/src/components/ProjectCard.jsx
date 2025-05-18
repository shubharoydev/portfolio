import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={cn(
        "border rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out bg-white",
        "hover:bg-gradient-to-b hover:from-gray-50 hover:to-teal-50 dark:hover:from-gray-800",
        "hover:shadow-lg hover:scale-105"
      )}
      layout
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
          <button onClick={() => setIsExpanded(!isExpanded)} aria-label="Toggle Description">
            {isExpanded ? "▲" : "▼"}
          </button>
        </div>
        <p className="text-sm text-gray-500">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-2 my-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-teal-100 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              <p className="text-sm text-gray-600 mb-2">{project.longDesc}</p>
              <div className="flex gap-2">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white px-3 py-1 bg-blue-500 rounded"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;