import React from 'react';
import './ProjectModal.css'; // Optional if you want to style separately

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>{project.title}</h2>

        <img
          src={project.image}
          alt={project.title}
          className="modal-image"
          style={{
            maxWidth: '100%',
            borderRadius: '10px',
            marginBottom: '1rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        />

        <p style={{ marginBottom: '1rem' }}>{project.modalDescription}</p>

      

      </div>
    </div>
  );
};

export default ProjectModal;
