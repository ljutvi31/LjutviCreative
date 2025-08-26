import { User, Target, Award, Zap } from 'lucide-react';
import '../styles/components.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <div className="about-header">
              <h2 className="about-title">
                <span className="about-title-name">Ljutvi Harryum,</span>
                <span className="about-title-role">
                  Créateur visuel
                </span>
              </h2>
              <div className="about-divider"></div>
            </div>

            <div className="about-text">
              <p className="text-lg">
                Je me lance dans l'aventure entrepreneuriale avec une passion : 
                <span className="text-purple-400"> créer des identités visuelles qui marquent les esprits</span>.
              </p>
              
              <p>
                Mon parcours est atypique : steward, tatoueur, architecte d'intérieur... 
                J'ai exploré différents domaines pour me trouver. Une formation en développement web 
                chez OpenClassrooms m'a aidé à me reconstruire après un diagnostic de sclérose en plaques.
              </p>

              <p>
                Aujourd'hui, j'allie cette expérience de vie riche à ma passion créative. 
                <span className="text-blue-400 font-medium">Mon approche unique combine</span> 
                l'art traditionnel sur tablette graphique (Procreate) et l\'intelligence artificielle 
                pour créer des identités visuelles authentiques et innovantes.
              </p>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">2025</div>
                <div className="about-stat-label">nouvelle aventure</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number text-blue-400">Paris</div>
                <div className="about-stat-label">basé en France</div>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="about-features-grid">
              <div className="feature-card">
                <User className="text-purple-400 mb-3" size={24} />
                <h3 className="font-semibold mb-2">Approche personnalisée</h3>
                <p className="text-sm text-gray-400">Chaque création est unique et adaptée à votre vision</p>
              </div>

              <div className="feature-card-blue">
                <Zap className="text-blue-400 mb-3" size={24} />
                <h3 className="font-semibold mb-2">Technologie hybride</h3>
                <p className="text-sm text-gray-400">Procreate + IA pour un rendu optimal</p>
              </div>

              <div className="feature-card-cyan">
                <Target className="text-cyan-400 mb-3" size={24} />
                <h3 className="font-semibold mb-2">Résultats garantis</h3>
                <p className="text-sm text-gray-400">Satisfaction client et qualité professionnelle</p>
              </div>

              <div className="feature-card-indigo">
                <Award className="text-indigo-400 mb-3" size={24} />
                <h3 className="font-semibold mb-2">Micro-entrepreneur</h3>
                <p className="text-sm text-gray-400">Flexibilité et tarifs adaptés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;