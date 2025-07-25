import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Heart, MapPin, Calendar, Home, Users, Gift } from 'lucide-react';

// Homepage Component
const HomePage = ({ navigate }: { navigate: (path: string) => void }) => (
  <div className="max-w-6xl mx-auto">
    <div className="bg-white p-12 rounded-lg shadow-lg">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <Heart className="w-16 h-16 text-red-500 mr-4" />
            <h1 className="text-5xl text-blue-900">Justine & Samuel</h1>
          </div>
          <p className="text-2xl text-red-600 mb-8">Célébrons ensemble l'amour</p>
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-6xl font-bold text-blue-900 mb-4 tracking-wider">06/05/2026</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            C'est avec une immense joie que nous vous invitons à célébrer notre mariage.
          </p>
          <div className="text-center md:text-left">
            <button
              onClick={() => navigate('/presence')}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-600 transition-colors shadow-lg text-lg"
            >
              Je confirme ma présence
            </button>
          </div>
        </div>
        
        {/* Right side - Photo */}
        <div className="flex justify-center md:justify-end">
          <img 
            src="/image.png" 
            alt="Justine et Samuel - Photo de fiançailles" 
            className="w-full h-auto max-h-96 object-contain rounded-3xl overflow-hidden"
            style={{ borderRadius: '24px' }}
          />
        </div>
      </div>
    </div>
  </div>
);

// Infos Pratiques Component
const InfosPratiques = () => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-serif text-blue-900 text-center mb-12">Informations pratiques</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <MapPin className="w-8 h-8 text-red-500 mb-4" />
        <h3 className="text-2xl font-serif text-blue-900 mb-4">Lieu et dates du mariage</h3>
        <p className="text-gray-700 mb-2"><strong>Hameau de Valouse - Grange Basse</strong></p>
        <p className="text-gray-600 mb-2">26110 Valouse, France</p>
        <p className="text-gray-700 text-xl font-medium mb-4">Du 06 au 08 mai 2026</p>
        <p className="text-gray-700 mb-4">
          Le lieu dispose d'un parking gratuit. 
          <a href="https://www.google.com/maps/place/Hameau+de+Valouse/@44.4498939,5.1992744,17z/data=!3m1!4b1!4m6!3m5!1s0x12ca9aeeb61c92c9:0x940ddfa7ed9e7ccf!8m2!3d44.4498939!4d5.2018493!16s%2Fg%2F1td8w9m9?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-1">
            Voir sur Google Maps
          </a>
        </p>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.1234567890123!2d5.2018493!3d44.4498939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca9aeeb61c92c9%3A0x940ddfa7ed9e7ccf!2sHameau%20de%20Valouse!5e0!3m2!1sfr!2sfr!4v1234567890123"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Hameau de Valouse - Grange Basse"
          ></iframe>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <MapPin className="w-8 h-8 text-red-500 mb-4" />
        <h3 className="text-2xl font-serif text-blue-900 mb-4">Comment venir ?</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-serif text-blue-900 mb-2">🚂 En train</h4>
            <p className="text-gray-700 mb-2">Gares TGV les plus proches : <strong>Avignon TGV</strong> ou <strong>Montélimar TGV</strong>.</p>
            <p className="text-gray-600">Puis 1 heure de route en voiture.</p>
          </div>
          <div>
            <h4 className="text-lg font-serif text-blue-900 mb-2">🚗 En voiture</h4>
            <div className="space-y-1 text-gray-700">
              <p><strong>1h15</strong> depuis Piolenc</p>
              <p><strong>5h30</strong> depuis Barcelone</p>
              <p><strong>8h</strong> depuis Paris</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Programme du mariage */}
    <div className="mt-12">
      <h2 className="text-3xl font-serif text-blue-900 text-center mb-8">Programme du mariage</h2>
      
      {/* Mercredi 6 Mai */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="bg-blue-900 text-white p-6">
          <h3 className="text-2xl font-serif text-center">Mercredi 6 Mai 2026</h3>
        </div>
        <div className="p-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                15:00
              </div>
              <div>
                <h4 className="text-xl font-serif text-blue-900 mb-2">Accueil des invités</h4>
                <p className="text-gray-700">Rassemblement au Hameau de Valouse pour un premier moment de convivialité.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                17:00
              </div>
              <div>
                <h4 className="text-xl font-serif text-blue-900 mb-2">Cérémonie laïque</h4>
                <p className="text-gray-700">Échange des vœux à la Grange Basse, en présence de nos familles et amis.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                18:30
              </div>
              <div>
                <h4 className="text-xl font-serif text-blue-900 mb-2">Cocktail</h4>
                <p className="text-gray-700">Moment de détente avec cocktail dans les espaces extérieurs.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                20:30
              </div>
              <div>
                <h4 className="text-xl font-serif text-blue-900 mb-2">Dîner de mariage</h4>
                <p className="text-gray-700">Repas gastronomique servi dans la grande salle de réception.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                23:30
              </div>
              <div>
                <h4 className="text-xl font-serif text-blue-900 mb-2">Fiesta</h4>
                <p className="text-gray-700">Soirée dansante pour célébrer notre union !</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jeudi 7 Mai */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="bg-green-600 text-white p-6">
          <h3 className="text-2xl font-serif text-center">Jeudi 7 Mai 2026</h3>
        </div>
        <div className="p-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-green-100">∞</span>
              </div>
              <div>
                <h4 className="text-xl font-serif text-blue-900 mb-2">Chill dans le domaine</h4>
                <p className="text-gray-700">Piscine, ping pong, jeux de cartes - Profitez des installations du domaine !</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                12:00
              </div>
              <div>
                <h4 className="text-xl font-serif text-blue-900 mb-2">Brunch</h4>
                <p className="text-gray-700">Brunch convivial pour se remettre de la veille.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                20:00
              </div>
              <div>
                <h4 className="text-xl font-serif text-blue-900 mb-2">Food truck</h4>
                <p className="text-gray-700">Dîner décontracté avec un food truck sur place.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendredi 8 Mai */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-purple-600 text-white p-6">
          <h3 className="text-2xl font-serif text-center">Vendredi 8 Mai 2026</h3>
        </div>
        <div className="p-8">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-purple-100">🏠</span>
            </div>
            <div>
              <h4 className="text-xl font-serif text-blue-900 mb-2">Départ du domaine</h4>
              <p className="text-gray-700">Fin des festivités - Départ entre 10h et 11h.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Presence Component
const Presence = ({ formData, setFormData, isFormSubmitted, handleInputChange, handleSubmit }: any) => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-serif text-blue-900 text-center mb-12">Confirmer votre présence</h1>
    
    {isFormSubmitted ? (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <Heart className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-serif text-green-800 mb-4">Merci pour votre réponse !</h2>
        <p className="text-green-700">
          Nous avons bien reçu votre confirmation de présence. Nous avons hâte de vous retrouver pour célébrer notre mariage !
        </p>
      </div>
    ) : (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-lg text-gray-700">
            Merci de confirmer votre présence avant le 1er mars 2026.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-2">
              Adresse postale
            </label>
            <textarea
              id="adresse"
              name="adresse"
              value={formData.adresse}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Votre adresse complète..."
            />
          </div>
          
          <div>
            <label htmlFor="participation" className="block text-sm font-medium text-gray-700 mb-2">
              Je participe au mariage *
            </label>
            <select
              id="participation"
              name="participation"
              value={formData.participation}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choisissez votre réponse</option>
              <option value="oui">Oui &lt;3</option>
              <option value="non">Malheureusement non...</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Je souhaite laisser un message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Votre message pour les mariés..."
            />
          </div>
          
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              Confirmer ma présence
            </button>
          </div>
        </form>
      </div>
    )}
  </div>
);

// Hebergement Component
const Hebergement = () => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-serif text-blue-900 text-center mb-12">Hébergement</h1>
    <p className="text-lg text-gray-700 text-center mb-12">
      Le Hameau de Valouse dispose de 100 couchages.
      <br /><br />
      Nous pourrons donc normalement héberger la totalité de nos invités sur place, moyennnant une participation de 100 euros par personne pour les deux nuits.
      <br /><br />
      Pas de participation demandée pour les enfants !
    </p>
    
    <div className="bg-blue-50 p-8 rounded-lg mb-8">
      <h3 className="text-2xl font-serif text-blue-900 mb-4 text-center">Types d'hébergement disponibles</h3>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-3">🛏️</div>
          <h4 className="text-xl font-serif text-blue-900 mb-2">30 chambres individuelles</h4>
          <p className="text-gray-700">Salle de bain et toilettes privatives</p>
      </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-3">🏠</div>
          <h4 className="text-xl font-serif text-blue-900 mb-2">3 appartements</h4>
          <p className="text-gray-700">Salle de bain et toilettes partagées et pièce à vivre commune type salon</p>
      </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-4xl mb-3">🛌</div>
          <h4 className="text-xl font-serif text-blue-900 mb-2">24 lits d'appoints</h4>
          <p className="text-gray-700">Confortables couchages supplémentaires</p>
      </div>
      </div>
    </div>
    
    <p className="text-lg text-gray-700 text-center mb-12">
      Nous reviendrons vers vous pour l'organisation des couchages, mais tout le monde bénéficiera d'un confort agréable pour profiter des festivités comme il se doit.
    </p>
  </div>
);

// Cagnotte Component
const Cagnotte = () => (
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl font-serif text-blue-900 mb-12">Cagnotte de mariage</h1>
    
    <div className="bg-white p-12 rounded-lg shadow-lg mb-8">
      <Gift className="w-16 h-16 text-red-500 mx-auto mb-6" />
      <h2 className="text-3xl font-serif text-blue-900 mb-6">Votre présence est le plus beau des cadeaux</h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Si toutefois vous souhaitiez nous faire plaisir, nous avons créé une cagnotte 
        qui nous aidera à réaliser notre voyage de noces.
      </p>
      
      <div className="bg-red-50 p-8 rounded-lg mb-8">
        <h3 className="text-2xl font-serif text-blue-900 mb-4">Comment participer</h3>
        <p className="text-gray-700 mb-4">
          Nous avons créé une cagnotte en ligne pour faciliter votre participation.
        </p>
        <div className="text-center">
          <a 
            href="https://www.millemercismariage.com/samuel-justine/liste.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
          >
            Accéder à notre cagnotte
          </a>
        </div>
      </div>
      
      <div className="bg-blue-50 p-8 rounded-lg">
        <h3 className="text-2xl font-serif text-blue-900 mb-4">Notre projet</h3>
        <p className="text-gray-700 mb-4">
          Nous rêvons de partir à l'île Maurice pour notre voyage de noces : plages de sable blanc, lagons turquoise, nature luxuriante et douceur de vivre… Un cadre idyllique pour débuter notre vie de couple marié.
        </p>
        <img 
          src="/ile-maurice.jpg" 
          alt="Île Maurice - Voyage de noces" 
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
);

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    adresse: '',
    participation: '',
    message: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const navigation = [
    { id: 'accueil', label: 'Accueil', icon: Home, path: '/' },
    { id: 'infos', label: 'Infos pratiques', icon: MapPin, path: '/infos-pratiques' },
    { id: 'presence', label: 'Présence', icon: Heart, path: '/presence' },
    { id: 'hebergement', label: 'Hébergement', icon: Users, path: '/hebergement' },
    { id: 'cagnotte', label: 'Cagnotte', icon: Gift, path: '/cagnotte' },
  ];

  const getActiveSection = () => {
    const path = location.pathname;
    const navItem = navigation.find(item => item.path === path);
    return navItem ? navItem.id : 'accueil';
  };

  // Scroll to top when section changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        adresse: '',
        participation: '',
        message: ''
      });
      setIsFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-serif text-blue-900">J & S</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      getActiveSection() === item.id
                        ? 'bg-blue-900 text-white shadow-lg'
                        : 'text-blue-900 hover:bg-blue-50 hover:shadow-md'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <select
                value={getActiveSection()}
                onChange={(e) => {
                  const selectedItem = navigation.find(item => item.id === e.target.value);
                  if (selectedItem) {
                    navigate(selectedItem.path);
                  }
                }}
                className="border border-blue-300 rounded-lg px-3 py-2 text-blue-900 bg-white"
              >
                {navigation.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage navigate={navigate} />} />
          <Route path="/infos-pratiques" element={<InfosPratiques />} />
          <Route path="/presence" element={<Presence formData={formData} setFormData={setFormData} isFormSubmitted={isFormSubmitted} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />} />
          <Route path="/hebergement" element={<Hebergement />} />
          <Route path="/cagnotte" element={<Cagnotte />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-serif mb-4">Contacts</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Samuel Rochwerg</p>
                  <p className="text-blue-200">06 43 86 13 60</p>
                  <p className="text-blue-200">samuelrochwerg1@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Justine Benhamou Pianna</p>
                  <p className="text-blue-200">07 68 90 67 87</p>
                  <p className="text-blue-200">justine.benhamou@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Legal Links */}
            <div>
              <h3 className="text-xl font-serif mb-4">Informations légales</h3>
              <div className="space-y-2">
                <button className="block text-blue-200 hover:text-white transition-colors">
                  Politique de confidentialité
                </button>
                <button className="block text-blue-200 hover:text-white transition-colors">
                  Conditions générales
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Heart className="w-5 h-5 text-red-400" />
              <p className="text-blue-200">© 2024 Justine & Samuel - Créé avec amour</p>
              <Heart className="w-5 h-5 text-red-400" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;