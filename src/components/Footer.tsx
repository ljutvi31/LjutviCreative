import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800/50 backdrop-blur border-t border-gray-700/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Ljutvi Creative
            </div>
            <p className="text-gray-400 text-sm">
              Créateur d'identités visuelles • Logos & Sites web
            </p>
          </div>

          <div className="flex items-center space-x-8">
            <div className="text-sm text-gray-400">
              <span>Fait avec</span>
              <Heart className="inline-block mx-1 text-red-400" size={16} />
              <span>par Ljutvi Harryum</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-purple-500/20 hover:bg-purple-500/30 p-2 rounded-full transition-colors"
            >
              <ArrowUp size={20} className="text-purple-400" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Ljutvi Creative. Tous droits réservés. | 
            <span className="text-purple-400"> Micro-entrepreneur</span> | 
            Siret: 98989721000013
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;