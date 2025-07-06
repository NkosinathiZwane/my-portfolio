import { useState } from 'react';
import ProjectModal from './ProjectModal';
import Skills from './Skills';
import { FaHome } from 'react-icons/fa';
import LogoModal from './LogoModal'; 


function App() {
  const [selectedProject, setSelectedProject] = useState(null);

const [selectedLogo, setSelectedLogo] = useState(null);

const projects = [
  {
    title: "Hospital Management System",
    description: "Built with Java, JSP, Servlets, and PostgreSQL. It allows users to register, book appointments, and manage hospital data.",
    image: "/projects/hospital.png", 
    link: "https://github.com/yourusername/hms",
    bgColor: "#FDE2E2",
    modalDescription: "This system allows patients to register, book appointments, and lets doctors manage schedules, all with secure session handling and database integration.",

  },
  {
    title: "Paradise Nursery App",
    description: "Built with React",
    image: "/projects/nesare.png", 
    modalDescription: "This app lets users browse categorized nursery products, add them to a cart, and view a dynamic shopping experience. Fully responsive and interactive.",
    bgColor: "#E2F6F4"
  },
  {
    title: "Portfolio Website",
    description: "Built with React",
    image: "/projects/portfolio.png",
    link: "https://yourusername.github.io/",
    bgColor: "#FFF4D2",
    modalDescription: "A responsive portfolio site to showcase my projects, skills, and design work. It includes custom modals, section transitions, and a contact form with email integration.",
  }
];


  return (
    <div>
      
{/* Top Bar with Name */}
  <div className="top-bar">
    <div className="site-name">Nkosinathi Joshua Zwane</div>
  </div>
    
  {/* Button Navigation Bar (in its own section) */}
  <div className="button-nav-bar">
  <div className="nav-bubble">
    <nav className="main-nav">
      <ul>
        <li><a href="#intro">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
        <li><a href="#recommendations">Recommendations</a></li>
      </ul>
    </nav>
  </div>
</div>



     {/* Landing / Intro Section with Picture and About Me */}
<section id="intro" className="intro-section">
  <div className="intro-container">
    {/* Profile Picture on the Left */}
    <div className="profile-pic-container">
      <img src="/profile.jpg" alt="Profile" className="profile-pic" />
    </div>

    {/* About Me on the Right */}
    <div className="about-text-bubble">
      <h2><span className="section-badge badge-blue">About Me</span></h2>

      <p>I am an aspiring Full Stack Developer and Logo Designer dedicated to crafting user centered solutions at the intersection of code and creativity. Proficient in Front End and Back End development and brand identity design, I leverage strong communication skills and adaptability to deliver precise, professional results. Currently enhancing expertise through Coursera coursework, with a core belief that passion transforms effort into success.</p>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2><span className="section-badge badge-blue">Skills</span></h2>
        <Skills />
      </section>

      {/* Projects Section */}
<section id="projects" className="section">
  <h2><span className="section-badge badge-blue">Projects</span></h2>
    <p>Click any project for more about it</p>
  <div className="projects-grid">
    {projects.map((project, index) => (
      <div
        key={index}
        className="project-card"
        onClick={() => setSelectedProject(project)}
        style={{
          backgroundColor: project.bgColor,  
          cursor: 'pointer',                
          borderRadius: '10px',             
          padding: '1rem',                 
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' 
        }}
      >
        <h3>{project.title}</h3>
        <p>{project.description.split(".")[0]}</p>
      </div>
    ))}
  </div>
</section>


        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      

       {/*<section id="designs" className="section">
  <h2><span className="section-badge badge-blue">Logo Design</span></h2>
  <div style={{ textAlign: "center", marginBottom: "1rem" }}>
  <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>
    Here are some logos I've created for real businesses and projects.
  </p>
  <p style={{ fontSize: "1rem", color: "#555" }}>
    <em>Click on any logo for more information.</em>
  </p>
</div>

  <div className="logo-grid">
    {[
      {
        image: "/logos/logo1.png",
        title: "Logo for Nesare Media",
        description: "This logo was designed for Nesare Media, a digital content company.",
      },
      {
        image: "/logos/logo2.png",
        title: "Logo for Health360",
        description: "Health360 needed a clean, professional logo for their healthcare platform.",
      },
      {
        image: "/logos/logo3.png",
        title: "Logo for DevNode",
        description: "DevNode is a developer networking app, and this logo captures their tech-first spirit.",
      },
    ].map((logo, index) => (
      <div key={index} className="logo-card" onClick={() => setSelectedLogo(logo)}>
        <img src={logo.image} alt={logo.title} />
      </div>
    ))}
  </div>

  
  <LogoModal logo={selectedLogo} onClose={() => setSelectedLogo(null)} />
</section> 
*/}
     


      {/* Contact Section */}
<section id="contact" className="section">

  <h2><span className="section-badge badge-blue">Contact</span></h2>
  
    <p className="contact-intro">
  For collaborations or more, You can reach me through any of the platforms below.
</p>



<div className="contact-icons-with-labels">
  <a
    href="joshuankhosinathi@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <img src="/icons/email.png" alt="Email" />
    <span>Email</span>
  </a>

  <a
    href="https://github.com/NkosinathiZwane"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <img src="/icons/github.png" alt="GitHub" />
    <span>GitHub</span>
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61570887327008"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <img src="/icons/facebook.png" alt="Facebook" />
    <span>Facebook</span>
  </a>

  <a
    href="https://www.instagram.com/joshua_nkosinathi_zwane/?igsh=OGQ5ZDc2ODk2ZA%3D%3D#"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <img src="/icons/instagram.png" alt="Instagram" />
    <span>Instagram</span>
  </a>

</div>
</section>


<section id="recommendations" className="section">
  <h2>
    <span className="section-badge badge-blue">Recommendations</span>
  </h2>

  <p className="recommendation-info">
    💬 Feel free to share your feedback or recommendation below.
  </p>

  <form
    action="https://formspree.io/f/xldnkdjp"
    method="POST"
    className="contact-form"
  >
    <input type="text" name="name" placeholder="Your Name" required />
    <textarea
      name="recommendation"
      placeholder="Write your recommendation here..."
      rows="6"
      required
    ></textarea>
    <button type="submit">Submit Recommendation</button>
  </form>
</section>





    <button
  className="scroll-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <FaHome size={24} />
</button>


    </div>
  );
}

export default App;
