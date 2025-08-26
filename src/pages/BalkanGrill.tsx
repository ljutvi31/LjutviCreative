import { ArrowLeft, MapPin, Clock, Phone, Star } from 'lucide-react';

const BalkanGrill = () => {
  const dishes = [
    {
      name: "Ćevapi",
      description: "Petites saucisses grillées servies avec oignons et pain pita",
      price: "12€",
      category: "Grillades"
    },
    {
      name: "Pljeskavica",
      description: "Steak haché grillé aux épices balkaniques",
      price: "14€",
      category: "Grillades"
    },
    {
      name: "Sarma",
      description: "Feuilles de chou farcies à la viande et au riz",
      price: "13€",
      category: "Plats traditionnels"
    },
    {
      name: "Burek",
      description: "Feuilleté traditionnel au fromage ou à la viande",
      price: "8€",
      category: "Entrées"
    },
    {
      name: "Ajvar",
      description: "Caviar de poivrons rouges, spécialité des Balkans",
      price: "6€",
      category: "Entrées"
    },
    {
      name: "Rakija",
      description: "Eau-de-vie traditionnelle aux fruits",
      price: "5€",
      category: "Boissons"
    }
  ];

  const goBack = () => {
    window.history.length > 1 ? window.history.back() : (window.location.href = '/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative h-96 bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900">
        {/* L'overlay et l'image restent en fond */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* ✅ Bouton au-dessus de tout */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={goBack}
            className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Retour</span>
          </button>
        </div>

        {/* ✅ Contenu centré sous le bouton, mais au-dessus du fond */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Balkan Grill
            </h1>
            <p className="text-xl text-gray-200">Saveurs authentiques des Balkans</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Notre Carte</h2>
              <div className="space-y-8">
                {['Entrées', 'Grillades', 'Plats traditionnels', 'Boissons'].map(category => (
                  <div key={category} className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-400 border-b border-red-400/30 pb-2">
                      {category}
                    </h3>
                    <div className="grid gap-4">
                      {dishes.filter(dish => dish.category === category).map((dish, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-white">{dish.name}</h4>
                            <span className="text-xl font-bold text-red-400">{dish.price}</span>
                          </div>
                          <p className="text-gray-300">{dish.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4 text-white">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-red-400" size={20} />
                  <div>
                    <div className="text-white font-medium">15 Rue de la Paix</div>
                    <div className="text-gray-400 text-sm">75001 Paris</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="text-red-400" size={20} />
                  <div>
                    <div className="text-white font-medium">Mar-Dim: 12h-22h</div>
                    <div className="text-gray-400 text-sm">Fermé le lundi</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-red-400" size={20} />
                  <div className="text-white font-medium">01 42 33 44 55</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4 text-white">Avis Clients</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "Authentique et délicieux ! Les ćevapi sont parfaits."
                  </p>
                  <p className="text-gray-500 text-xs mt-1">- Marie L.</p>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    "Ambiance chaleureuse, cuisine traditionnelle excellente."
                  </p>
                  <p className="text-gray-500 text-xs mt-1">- Pierre M.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105">
                Réserver une table
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalkanGrill;
