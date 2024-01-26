import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="project-card"
    >
      {project.pic}
      <div className="project-title">
        <Typography sx={{ color: "white", fontSize: 16 }}>
          {project.title}
        </Typography>
      </div>
      <div className="project-links text-white d-flex justify-content-evenly">
        <a href={project.github} target="_blank" rel="noreferrer">
          Code
        </a>
        <a href={project.netlify} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
