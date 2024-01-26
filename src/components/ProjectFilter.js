import React, { useEffect } from "react";

function ProjectFilter({ setActiveTab, activeTab, setFiltered, projects }) {
  useEffect(() => {
    if (activeTab === "all") {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((project) =>
      project.type.includes(activeTab)
    );
    setFiltered(filtered);
  }, [activeTab]);
  return (
    <div className="project-filter w-100 d-flex justify-content-center gap-4">
      <button
        className={activeTab === "all" ? "active" : ""}
        onClick={() => setActiveTab("all")}
      >
        ALL
      </button>
      <button
        className={activeTab === "fsd" ? "active" : ""}
        onClick={() => setActiveTab("fsd")}
      >
        FSD
      </button>
      <button
        className={activeTab === "react" ? "active" : ""}
        onClick={() => setActiveTab("react")}
      >
        REACT
      </button>
      <button
        className={activeTab === "html" ? "active" : ""}
        onClick={() => setActiveTab("html")}
      >
        HTML/CSS/JS
      </button>
    </div>
  );
}

export default ProjectFilter;
