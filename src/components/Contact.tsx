import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      {
        name: formData.name,
        email: formData.email,       // pour le Reply-To
        title: formData.service,     // correspond à {{title}} dans ton template
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    })
    .catch((err) => {
      console.error("Erreur EmailJS :", err);
      alert("Une erreur est survenue, merci de réessayer.");
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Prêt à créer
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ensemble ?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Contactez-moi pour discuter de votre projet. 
            Première consultation gratuite pour définir vos besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Infos contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <Mail className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-300">Email</div>
                    <div className="text-white font-medium">ljutviharry@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Phone className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-300">Téléphone</div>
                    <div className="text-white font-medium">06 14 33 79 76</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <MapPin className="text-green-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-300">Localisation</div>
                    <div className="text-white font-medium">Paris, France</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Pourquoi me choisir ?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span>Approche personnalisée et créative</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span>Combinaison unique : art traditionnel + IA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span>Tarifs transparents et compétitifs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span>Accompagnement de A à Z</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Demander un devis</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold text-white mb-2">Message envoyé !</h4>
                <p className="text-gray-300">Je vous recontacte dans les 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service souhaité
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="logo">Logo (100€ - 200€)</option>
                    <option value="site-vitrine">Site vitrine (400€)</option>
                    <option value="site-ecommerce">Site e-commerce (550€)</option>
                    <option value="pack-essentiel">Pack Essentiel (650€)</option>
                    <option value="pack-premium">Pack Premium (800€)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Décrivez votre projet
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors resize-none"
                    placeholder="Parlez-moi de votre projet, vos besoins, vos idées..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Envoyer ma demande</span>
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
