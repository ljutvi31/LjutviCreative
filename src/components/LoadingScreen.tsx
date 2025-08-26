import { useEffect, useState } from 'react';
import '../styles/components.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          Ljutvi Creative
        </div>
        
        <div className="loading-subtitle">
          Créateur d'identités visuelles
        </div>
        
        <div className="loading-progress-container">
          <div className="loading-progress-bar">
            <div 
              className="loading-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="loading-percentage">{progress}%</div>
        </div>
        
        <div className="loading-dots">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;