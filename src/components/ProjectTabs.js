import React, { useEffect, useState } from "react";
import Capstone from "../assets/projects/capstone.png";
import SVI from "../assets/projects/svi.png";
import Todo from "../assets/projects/todo-app.png";
import URLReset from "../assets/projects/url-password-reset.png";
import ReduxShopping from "../assets/projects/react-redux.png";
import Book from "../assets/projects/formik-book.png";
import RouterCourse from "../assets/projects/react-router.png";
import RestAPI from "../assets/projects/rest-country-api.png";
import Calculator from "../assets/projects/calculator.png";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { motion, AnimatePresence } from "framer-motion";

const projectsList = [
  {
    id: 0,
    title: "Zen Class Ticketing System for Query Resolving",
    pic: (
      <img
        className="project-pic"
        width={"100%"}
        src={Capstone}
        alt="capstone"
      />
    ),
    type: ["all", "fsd"],
    netlify: "https://capstone-zenclass-ticketing-system.netlify.app/",
    github: "https://github.com/Yogesh1101/Capstone-Frontend.git",
  },
  {
    id: 1,
    title: "SVI Website",
    pic: <img className="project-pic" width={"100%"} src={SVI} alt="svi" />,
    type: ["all", "react"],
    netlify: "https://sri-velmurugan-industries.netlify.app/",
    github: "https://github.com/Yogesh1101/SVI-Website.git",
  },
  {
    id: 2,
    title: "TODO APP",
    pic: <img className="project-pic" width={"100%"} src={Todo} alt="todo" />,
    type: ["all", "fsd"],
    netlify: "https://yk-todoapp.netlify.app/",
    github: "https://github.com/Yogesh1101/TodoApp-Forntend.git",
  },
  {
    id: 3,
    title: "URL Shortend & Reset Password",
    pic: (
      <img
        className="project-pic"
        width={"100%"}
        src={URLReset}
        alt="url-reset"
      />
    ),
    type: ["all", "fsd"],
    netlify: "https://url-shortener-frontend-task.netlify.app/",
    github: "https://github.com/Yogesh1101/url-shortener-frontend.git",
  },
  {
    id: 4,
    title: "Shopping Cart using Redux",
    pic: (
      <img
        className="project-pic"
        width={"100%"}
        src={ReduxShopping}
        alt="redux-cart"
      />
    ),
    type: ["all", "react"],
    netlify: "https://fsd-day32-react-redux-task.netlify.app/",
    github: "https://github.com/Yogesh1101/FSD-Day32-React-Redux-Task.git",
  },
  {
    id: 5,
    title: "Book Management using Formik",
    pic: <img className="project-pic" width={"100%"} src={Book} alt="book" />,
    type: ["all", "react"],
    netlify: "https://fsd-day31-react-formik-task.netlify.app/",
    github: "https://github.com/Yogesh1101/FSD-Day31-React-Formik-Task.git",
  },
  {
    id: 6,
    title: "GUVI Course using Router",
    pic: (
      <img
        className="project-pic"
        width={"100%"}
        src={RouterCourse}
        alt="router-course"
      />
    ),
    type: ["all", "react"],
    netlify: "https://fsd-day26-react-router-task.netlify.app/",
    github: "https://github.com/Yogesh1101/FSD-Day26-React-Router-Task.git",
  },
  {
    id: 7,
    title: "Rest Country API",
    pic: (
      <img
        className="project-pic"
        width={"100%"}
        src={RestAPI}
        alt="rest-api"
      />
    ),
    type: ["all", "html"],
    netlify: "https://fsd-day17-task-rest-countries.netlify.app/",
    github: "https://github.com/Yogesh1101/Rest-API-Country-Info.git",
  },
  {
    id: 8,
    title: "Calculator",
    pic: (
      <img
        className="project-pic"
        width={"100%"}
        src={Calculator}
        alt="calculator"
      />
    ),
    type: ["all", "html"],
    github: "https://github.com/Yogesh1101/Calculator.git",
    netlify: "https://fsd-yogesh-kumar-calculator.netlify.app/",
  },
];

function ProjectTabs() {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  useEffect(() => {
    setProjects(projectsList);
    setFiltered(projectsList);
  }, []);
  return (
    <>
      <ProjectFilter
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        setFiltered={setFiltered}
        projects={projects}
      />
      <motion.div layout className="project-container mt-4">
        <AnimatePresence>
          {filtered.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default ProjectTabs;
