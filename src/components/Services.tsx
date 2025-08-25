import React from 'react';
import { Palette, Globe, ShoppingCart, Package, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Création de Logo",
      description: "Logo unique créé sur tablette graphique avec Procreate, optimisé par l'IA pour un rendu professionnel",
      price: "100€ - 200€",
      priceDetail: "selon complexité",
      features: ["Design original", "Fichiers vectoriels", "Déclinaisons couleurs", "Révisions incluses", "Charte graphique"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Site Vitrine",
      description: "Site web professionnel avec pages essentielles pour présenter votre activité",
      price: "400€",
      priceDetail: "site complet",
      features: ["Accueil + À propos", "Services + Contact", "Design responsive", "Hébergement"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShoppingCart,
      title: "Site E-commerce",
      description: "Boutique en ligne complète avec système de paiement intégré",
      price: "550€",
      priceDetail: "paiement inclus",
      features: ["Catalogue produits", "Panier & commandes", "Paiement sécurisé", "Gestion stocks"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const packs = [
    {
      title: "Pack Essentiel",
      description: "Logo + Site Vitrine",
      price: "650€",
      savings: "Économie jusqu'à 50€",
      icon: Package,
      popular: false
    },
    {
      title: "Pack Premium",
      description: "Logo + Site E-commerce",
      price: "800€",
      savings: "Économie jusqu'à 100€",
      icon: Star,
      popular: true
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Services &
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tarification
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des solutions complètes pour votre identité visuelle, 
            avec des tarifs transparents et adaptés à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.gradient} bg-opacity-10 mb-6`}>
                <service.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
                <div className="text-sm text-gray-400">{service.priceDetail}</div>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Packs Avantageux
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {packs.map((pack, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 backdrop-blur border rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                  pack.popular 
                    ? 'border-purple-500/50 hover:border-purple-500/70' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Le plus populaire
                    </div>
                  </div>
                )}

                <div className="flex items-center mb-4">
                  <pack.icon className="text-purple-400 mr-3" size={24} />
                  <h4 className="text-xl font-bold">{pack.title}</h4>
                </div>

                <p className="text-gray-300 mb-4">{pack.description}</p>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white mb-1">{pack.price}</div>
                  <div className="text-sm text-purple-400">Formule complète</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Demander un devis gratuit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;