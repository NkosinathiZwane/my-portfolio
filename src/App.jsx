import { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';
import Skills from './Skills';
import { FaHome, FaGithub, FaExternalLinkAlt, FaDownload, FaSun, FaMoon, FaWhatsapp, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';


function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Hi, I'm Nkosinathi, Web Developer & Creative Designer";

  // Typewriter effect
 
 useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      title: "TravelBloom",
      description: "Modern travel booking platform with stunning destinations and seamless user experience.",
      fullDescription: "TravelBloom is a comprehensive travel booking platform that allows users to explore destinations, book trips, and manage their travel experiences. Features include interactive destination galleries, booking system, user reviews, and responsive design optimized for all devices.",
      image: "./projects/travelbloom.png",
      liveLink: "https://nkosinathizwane.github.io/TravelBloom/",
      githubLink: "https://github.com/NkosinathiZwane/TravelBloom",
      techStack: ["HTML", "CSS", "JavaScript"],
      bgColor: "#E8F5E8"
    },
    {
      title: "Paradise Nursery App",
      description: "E-commerce platform for nursery products with shopping cart and category filtering.",
      fullDescription: "This comprehensive nursery e-commerce app allows users to browse categorized plant products, add them to a wishlist and cart, and enjoy a dynamic shopping experience. Features include product search, category filtering, cart management, and responsive design for optimal user experience across all devices.",
      image: "./projects/nursery.png",
      liveLink: "https://plantparadisenursery.netlify.app",
      githubLink: "https://github.com/NkosinathiZwane/paradise-nursery",
      techStack: ["React", "HTML", "CSS", "JavaScript"],
      bgColor: "#E2F6F4"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio showcasing projects and skills with dark mode toggle.",
      fullDescription: "A responsive portfolio website built to showcase my projects, skills, and design work. Features include custom modals, smooth animations, section transitions, dark mode toggle, typewriter effects, and a contact form with email integration. Built with modern React practices and optimized for performance.",
      image: "./projects/portfolio.png",
      liveLink: "https://nkosinathizwane.github.io/my-portfolio/",
      githubLink: "https://github.com/NkosinathiZwane/my-portfolio",
      techStack: ["React", "CSS", "JavaScript", "Vite"],
      bgColor: "#FFF4D2"
    }
  ];

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


  const ProjectModalComponent = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className={`modal-overlay ${darkMode ? 'dark' : ''}`} onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>×</button>
          
          <div className="modal-header">
            <h2>{project.title}</h2>
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="modal-image"
          />

          <p className="modal-description">{project.fullDescription}</p>

          <div className="modal-links">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Top Bar */}
      <div className="top-bar">
        <div className="site-name">Nkosinathi Joshua Zwane</div>
      </div>
      
      {/* Navigation */}
      <div className="button-nav-bar">
        <div className="nav-bubble">
          <nav className="main-nav">
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">My Skills</a></li>
              <li><a href="#projects">My Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-profile">
            <img src="./profile.jpg" alt="Nkosinathi Joshua Zwane" className="hero-profile-pic" />
          </div>
          <div className="hero-text">
            <h1 className="typewriter">{typewriterText}<span className="cursor">|</span></h1>
            <p className="hero-subtitle">Crafting digital experiences with passion and precision</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-elements">
              <div className="float-element">💻</div>
              <div className="float-element">🎨</div>
              <div className="float-element">⚡</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2><span className="section-badge">About Me</span></h2>
          <div className="about-card">
            <p>I'm a passionate aspiring Full Stack Developer and Creative Designer with a keen eye for detail and user experience. Currently enhancing my expertise through Coursera coursework, I specialize in creating responsive web applications and compelling brand identities.</p>
            <p>My journey in tech is driven by the belief that great design meets functionality, and every line of code should serve a purpose. I thrive on turning complex problems into simple, beautiful solutions.</p>
            <p>When I'm not coding, you can find me exploring the latest design trends, sketching new ideas, or enjoying a good book. Let's connect and create something amazing together!</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2><span className="section-badge">Skills & Expertise</span></h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2><span className="section-badge">Featured Projects</span></h2>
          <p className="section-subtitle">Click any project to explore in detail</p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                style={{ backgroundColor: project.bgColor }}
              >
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge-small">{tech}</span>
                    ))}
                  </div>
                  <div className="project-overlay">
                    <span>Click to explore</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2><span className="section-badge">Let's Connect</span></h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in touch</h3>
              <p>I'm always open to discussing new opportunities and interesting projects.</p>
              
              <div className="contact-methods">
                <div className="contact-row">
                  <a href="https://wa.me/0714166222" className="contact-method whatsapp">
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                  <a href="https://facebook.com/profile.php?id=61570887327008" className="contact-method facebook">
                    <FaFacebook />
                    <span>Facebook</span>
                  </a>
                </div>
                <div className="contact-row">
                  <a href="https://instagram.com/joshua_nkosinathi_zwane" className="contact-method instagram">
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                  <a href="https://github.com/NkosinathiZwane" className="contact-method github">
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="contact-row">
                  <a href="https://linkedin.com/in/nkosinathi-zwane-462a99216" className="contact-method linkedin">
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:joshuankhosinathi@gmail.com" className="contact-method email">
                    <FaEnvelope />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Send Me a Message</h3>
              <form className="contact-form" action="https://formspree.io/f/xldnkdjp" method="POST">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModalComponent project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Scroll to Top */}
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaHome />
      </button>
    </div>
  );
}

export default App;