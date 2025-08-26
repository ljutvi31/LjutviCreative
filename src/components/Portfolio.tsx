import { ExternalLink, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Restaurant Balkan Grill",
      category: "Logo Design",
      description: "Site complet pour restaurant spécialités slaves",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-red-500 to-orange-500",
      link: "/balkan-grill"
    },
    {
      title: "ArtShare Community",
      category: "Site Communautaire",
      description: "Plateforme de partage de dessins et créations",
      image: "https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-500 to-pink-500",
      link: "/artshare"
    },
    {
      title: "Logo Berzerker", 
      category: "Identité visuelle, Logo",
      description: "Création d'un logo pour une marque de vêtement",
      image:"", 
      gradient: "from-brown-500 to-gold-500",
      link: "/"
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            <span className="portfolio-title-main">
              Portfolio &
            </span>
            <span className="portfolio-title-accent">
              Réalisations
            </span>
          </h2>
          <p className="portfolio-description">
            Découvrez quelques-unes de mes créations récentes, 
            alliant créativité traditionnelle et technologies modernes
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image-img"
                />
                <div className="project-overlay"></div>
                <div className="project-actions">
                  <div className="project-actions-buttons">
                    <button className="project-action-button">
                      <Eye size={20} />
                    </button>
                    {project.link && (
                      <Link to={project.link} className="project-action-button">
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className={`project-category bg-gradient-to-r ${project.gradient}`}>
                  {project.category}
                </div>
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p className="portfolio-cta-text">Vous avez un projet en tête ?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="portfolio-cta-button"
          >
            Parlons-en ensemble
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;