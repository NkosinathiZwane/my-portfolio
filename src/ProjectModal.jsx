import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose, darkMode = false }) => {
  if (!project) return null;

  return (
    <div className={`modal-overlay ${darkMode ? 'dark' : ''}`} onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-header">
          <h2>{project.title}</h2>
          <div className="tech-stack">
            {project.techStack?.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="modal-image"
        />

        <p className="modal-description">
          {project.fullDescription || project.description}
        </p>

        <div className="modal-links">
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <FaExternalLinkAlt /> Live Link
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              <FaGithub /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;