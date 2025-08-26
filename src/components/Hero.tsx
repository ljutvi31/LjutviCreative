import { ArrowDown, Sparkles } from 'lucide-react';
import '../styles/components.css';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-gradient-1"></div>
      <div className="hero-gradient-2"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm text-purple-300">Créateur d'identités visuelles</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line-1">
              Votre vision,
            </span>
            <span className="hero-title-line-2">
              notre création
            </span>
          </h1>

          <p className="hero-description">
            Transformons ensemble vos idées en identité visuelle unique. 
            <span className="text-purple-400"> Logo, site web, expérience digitale complète.</span>
          </p>

          <div className="hero-buttons">
            <button 
              onClick={scrollToAbout}
              className="hero-button-primary"
            >
              Découvrir mon approche
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-button-secondary"
            >
              Voir mes services
            </button>
          </div>

          <div className="hero-scroll-indicator">
            <button onClick={scrollToAbout}>
              <ArrowDown size={24} className="text-purple-400 mx-auto" />
            </button>
          </div>
        </div>
      </div>

      <div className="hero-fade-bottom"></div>
    </section>
  );
};

export default Hero;