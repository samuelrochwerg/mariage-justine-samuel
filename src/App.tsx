import React, { useState } from 'react';
import { Heart, MapPin, Calendar, Home, Users, Gift } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  const navigation = [
    { id: 'accueil', label: 'Accueil', icon: Home },
    { id: 'infos', label: 'Infos pratiques', icon: MapPin },
    { id: 'programme', label: 'Programme', icon: Calendar },
    { id: 'hebergement', label: 'Hébergement', icon: Users },
    { id: 'cagnotte', label: 'Cagnotte', icon: Gift },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'accueil':
        return (
          <div className="text-center max-w-4xl mx-auto">
            <img 
              src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
              alt="Couple de mariés" 
              className="w-full h-96 object-cover rounded-lg shadow-2xl mb-12"
            />
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h1 className="text-5xl font-serif text-blue-900 mb-4">Justine & Samuel</h1>
              <p className="text-2xl text-red-600 mb-8">Nous nous marions !</p>
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h2 className="text-3xl font-serif text-blue-900 mb-4">Mardi 6 Mai 2025</h2>
                <p className="text-xl text-gray-700 mb-2">Cérémonie à 17h00</p>
                <p className="text-lg text-gray-600">Hameau de Valouse - Grange Basse, Valouse</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                C'est avec une immense joie que nous vous invitons à célébrer notre union. 
                Rejoignez-nous du 6 au 8 mai 2025 pour ce week-end magique où nous dirons "oui" entourés de nos proches.
              </p>
            </div>
          </div>
        );
      
      case 'infos':
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif text-blue-900 text-center mb-12">Informations pratiques</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <MapPin className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-2xl font-serif text-blue-900 mb-4">Lieu de la cérémonie</h3>
                <p className="text-gray-700 mb-2"><strong>Hameau de Valouse - Grange Basse</strong></p>
                <p className="text-gray-600 mb-4">26110 Valouse, France</p>
                <p className="text-gray-700">
                  Le lieu dispose d'un parking gratuit. 
                  <a href="https://g.co/kgs/yxHBiEt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-1">
                    Voir sur Google Maps
                  </a>
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Calendar className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-2xl font-serif text-blue-900 mb-4">Horaires</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Mardi 6 mai - 15h00</strong> - Début des festivités</p>
                  <p className="text-gray-700"><strong>Mardi 6 mai - 17h00</strong> - Cérémonie</p>
                  <p className="text-gray-700"><strong>Mardi 6 mai - 18h30</strong> - Cocktail</p>
                  <p className="text-gray-700"><strong>Mardi 6 mai - 20h30</strong> - Dîner</p>
                  <p className="text-gray-700"><strong>Jeudi 8 mai - 10h00</strong> - Fin du week-end</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Users className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-2xl font-serif text-blue-900 mb-4">Dress code</h3>
                <p className="text-gray-700 mb-4">
                  Nous souhaitons une ambiance élégante et raffinée.
                </p>
                <p className="text-gray-600">
                  <strong>Messieurs :</strong> Costume sombre<br/>
                  <strong>Mesdames :</strong> Tenue de soirée
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Heart className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-2xl font-serif text-blue-900 mb-4">RSVP</h3>
                <p className="text-gray-700 mb-4">
                  Merci de confirmer votre présence avant le 1er mai 2024.
                </p>
                <p className="text-blue-600 font-medium">
                  Réponse souhaitée par téléphone ou email
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'programme':
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif text-blue-900 text-center mb-12">Programme de la journée</h1>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-900 text-white p-6">
                <h2 className="text-2xl font-serif text-center">Du 6 au 8 Mai 2025</h2>
              </div>
              <div className="p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                    <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      15:00
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-blue-900 mb-2">Début des festivités</h3>
                      <p className="text-gray-700">Mardi 6 mai - Rassemblement au Hameau de Valouse pour un premier moment de convivialité.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                    <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      17:00
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-blue-900 mb-2">Cérémonie laïque</h3>
                      <p className="text-gray-700">Mardi 6 mai - Échange des vœux à la Grange Basse, en présence de nos familles et amis.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                    <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      18:30
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-blue-900 mb-2">Cocktail & Photos</h3>
                      <p className="text-gray-700">Mardi 6 mai - Moment de détente avec cocktail dans les espaces extérieurs, séance photos officielle.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 pb-6 border-b border-gray-200">
                    <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      20:30
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-blue-900 mb-2">Dîner de réception</h3>
                      <p className="text-gray-700">Mardi 6 mai - Repas gastronomique servi dans la grande salle de réception, avec discours et animations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      10:00
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-blue-900 mb-2">Fin du week-end</h3>
                      <p className="text-gray-700">Jeudi 8 mai - Petit-déjeuner d'adieu et fin des festivités.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'hebergement':
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-serif text-blue-900 text-center mb-12">Hébergement</h1>
            <p className="text-lg text-gray-700 text-center mb-12">
              Nous avons sélectionné plusieurs hébergements à proximité du lieu de réception pour votre confort.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif text-blue-900 mb-4">Hôtel des Jardins</h3>
                <p className="text-gray-600 mb-4">⭐⭐⭐⭐</p>
                <p className="text-gray-700 mb-4">
                  <strong>Adresse :</strong> 12 rue de la République, 26110 Nyons
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Distance :</strong> 15 minutes du lieu de réception
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Tarif :</strong> À partir de 120€ la nuit
                </p>
                <p className="text-gray-700">
                  <strong>Téléphone :</strong> 01 47 32 45 67
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif text-blue-900 mb-4">Auberge du Château</h3>
                <p className="text-gray-600 mb-4">⭐⭐⭐</p>
                <p className="text-gray-700 mb-4">
                  <strong>Adresse :</strong> 8 avenue du Général de Gaulle, 26110 Nyons
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Distance :</strong> 12 minutes du lieu de réception
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Tarif :</strong> À partir de 85€ la nuit
                </p>
                <p className="text-gray-700">
                  <strong>Téléphone :</strong> 01 47 51 23 89
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-serif text-blue-900 mb-4">Résidence Malmaison</h3>
                <p className="text-gray-600 mb-4">⭐⭐⭐⭐⭐</p>
                <p className="text-gray-700 mb-4">
                  <strong>Adresse :</strong> 25 boulevard National, 26110 Nyons
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Distance :</strong> 18 minutes du lieu de réception
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Tarif :</strong> À partir de 180€ la nuit
                </p>
                <p className="text-gray-700">
                  <strong>Téléphone :</strong> 01 47 14 56 78
                </p>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-900 mb-4">Informations importantes</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Réservations recommandées avant le 1er avril</li>
                  <li>• Possibilité de navette organisée le soir</li>
                  <li>• Tarifs préférentiels mentionnez "Mariage Justine & Samuel"</li>
                  <li>• Petit-déjeuner inclus dans la plupart des établissements</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'cagnotte':
        return (
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif text-blue-900 mb-12">Cagnotte</h1>
            
            <div className="bg-white p-12 rounded-lg shadow-lg mb-8">
              <Gift className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-blue-900 mb-6">Votre présence est le plus beau des cadeaux</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Si toutefois vous souhaitiez nous faire plaisir, nous avons créé une cagnotte 
                qui nous aidera à réaliser notre voyage de noces en Italie.
              </p>
              
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-serif text-blue-900 mb-4">Notre projet</h3>
                <p className="text-gray-700 mb-4">
                  Nous rêvons de découvrir l'Italie ensemble : Rome, Florence, Venise... 
                  Un voyage romantique pour commencer notre vie de couple marié.
                </p>
                <img 
                  src="https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                  alt="Paysage italien" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-serif text-blue-900 mb-4">Comment participer</h3>
                <p className="text-gray-700 mb-4">
                  Vous pouvez contribuer à notre cagnotte par virement bancaire ou directement le jour J.
                </p>
                <div className="text-left bg-white p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Titulaire :</strong> Justine Benhamou & Samuel Rochwerg</p>
                  <p className="text-gray-700 mb-2"><strong>IBAN :</strong> FR76 1234 5678 9012 3456 7890 123</p>
                  <p className="text-gray-700"><strong>Libellé :</strong> Voyage de noces Justine & Samuel</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
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
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
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
                value={activeSection}
                onChange={(e) => setActiveSection(e.target.value)}
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
        {renderContent()}
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