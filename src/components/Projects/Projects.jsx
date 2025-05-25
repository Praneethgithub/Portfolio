import React, { useState } from 'react';
import "./Projects.css";

export const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleProjects = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="projects">
      <h2 onClick={toggleProjects} style={{ cursor: 'pointer' }}>Projects</h2>
      {isExpanded && (
        <div className="projects-content">
          <div className="project-item">
            <div className="project-header">
              <h3>Marketing Mix Model for E-commerce Brand</h3>
              <span className="tech-stack">Machine Learning, Data Analytics, Marketing Analytics</span>
            </div>
            <ul className="project-details">
              <li>Developed a Marketing Mix Modeling (MMM) framework to optimize ad spend by reallocating $150K from low-performing channels to high-impact channels.</li>
              <li>Implemented strategic channel optimization focusing on FB ads, Google ads (with audience segmentation) and Brand Search.</li>
              <li>Conducted strategic testing of underperforming channels to identify improvement opportunities.</li>
              <li>Achieved a 20% boost in estimated client ROI through data-driven optimization.</li>
            </ul>
            <a 
              href="https://drive.google.com/file/d/1ZJYtzCBHHBTg-x221-PgOQ12PesG8K8p/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project Details →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}; 