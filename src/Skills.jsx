import React from 'react';
import './Skills.css'; // Optional if styles are separated

const skills = [
  { name: 'HTML', icon: '/logos/html.png' },
  { name: 'CSS', icon: '/logos/css.png' },
  { name: 'JavaScript', icon: '/logos/javascript.png' },
  { name: 'React', icon: '/logos/react.png' },
  { name: 'Node.js', icon: '/logos/node.png' },
  { name: 'Java', icon: '/logos/java.png' },
  { name: 'SQL', icon: '/logos/sql.png' },
  { name: 'Logo Design', icon: '/logos/design.png' } // optional logo for design
];

function Skills() {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-box">
          <img src={skill.icon} alt={skill.name} className="skill-logo" />
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
