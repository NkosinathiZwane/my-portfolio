import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: './skills/html.png' },
  { name: 'CSS', icon: './skills/css.png' },
  { name: 'JavaScript', icon: './skills/javascript.png' },
  { name: 'React', icon: './skills/react.png' },
  { name: 'Node.js', icon: './skills/node.png' },
  { name: 'Java', icon: './skills/java.png' },
  { name: 'SQL', icon: './skills/sql.png' },
  { name: 'Logo Design', icon: './skills/design.png' }
];

function Skills() {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <img src={skill.icon} alt={skill.name} className="skill-icon" />
          <h3>{skill.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Skills;