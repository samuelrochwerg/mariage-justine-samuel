import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Heart, MapPin, Calendar, Home, Users, Gift } from 'lucide-react';

// Homepage Component
const HomePage = ({ navigate }: { navigate: (path: string) => void }) => (
  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 items-center">
        {/* Left side - Text content */}
        <div className="text-center order-2 lg:order-1 lg:pr-8">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Heart className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mr-2 sm:mr-4" style={{ color: '#c81315' }} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#723d46' }}>Justine & Samuel</h1>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8" style={{ color: '#c81315' }}>Célébrons ensemble l'amour</p>
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4 tracking-wider" style={{ color: '#723d46' }}>06/05/2026</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            C'est avec une immense joie que nous vous invitons<br />
            à célébrer notre mariage.
          </p>
          <div className="text-center">
            <button
              onClick={() => navigate('/presence')}
              className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-colors shadow-lg text-base sm:text-lg w-full sm:w-auto"
              style={{ backgroundColor: '#723d46' }}
            >
              Je confirme ma présence
            </button>
          </div>
        </div>
        
        {/* Right side - Photo */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
            <img 
              src="/image.png" 
              alt="Justine et Samuel - Photo de fiançailles" 
              className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-lg"
              style={{ borderRadius: '16px' }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Infos Pratiques Component
const InfosPratiques = () => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-serif text-center mb-12" style={{ color: '#723d46' }}>Informations pratiques</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <MapPin className="w-8 h-8 mb-4" style={{ color: '#c81315' }} />
        <h3 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>Lieu et dates du mariage</h3>
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
        <MapPin className="w-8 h-8 mb-4" style={{ color: '#c81315' }} />
        <h3 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>Comment venir ?</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-serif mb-2" style={{ color: '#723d46' }}>🚂 En train</h4>
            <p className="text-gray-700 mb-2">Gares TGV les plus proches : <strong>Avignon TGV</strong> ou <strong>Montélimar TGV</strong>.</p>
            <p className="text-gray-600">Puis 1 heure de route en voiture.</p>
          </div>
          <div>
            <h4 className="text-lg font-serif mb-2" style={{ color: '#723d46' }}>🚗 En voiture</h4>
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
      <h2 className="text-3xl font-serif text-center mb-8" style={{ color: '#723d46' }}>Programme du mariage</h2>
      
      {/* Mercredi 6 Mai */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="text-white p-6" style={{ backgroundColor: '#723d46' }}>
          <h3 className="text-2xl font-serif text-center">Mercredi 6 Mai 2026</h3>
        </div>
        <div className="p-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4 pb-4 border-b border-gray-200">
              <div className="text-white rounded-full w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-sm flex-shrink-0" style={{ backgroundColor: '#c81315' }}>
                15:00
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif mb-2" style={{ color: '#723d46' }}>Accueil des invités</h4>
                <p className="text-gray-700">Rassemblement au Hameau de Valouse pour un premier moment de convivialité.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4 pb-4 border-b border-gray-200">
              <div className="text-white rounded-full w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-sm flex-shrink-0" style={{ backgroundColor: '#c81315' }}>
                17:00
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif mb-2" style={{ color: '#723d46' }}>Cérémonie laïque</h4>
                <p className="text-gray-700">Échange des vœux à la Grange Basse, en présence de nos familles et amis.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4 pb-4 border-b border-gray-200">
              <div className="text-white rounded-full w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-sm flex-shrink-0" style={{ backgroundColor: '#c81315' }}>
                18:30
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif mb-2" style={{ color: '#723d46' }}>Cocktail</h4>
                <p className="text-gray-700">Moment de détente avec cocktail dans les espaces extérieurs.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4 pb-4 border-b border-gray-200">
              <div className="text-white rounded-full w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-sm flex-shrink-0" style={{ backgroundColor: '#c81315' }}>
                20:30
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif mb-2" style={{ color: '#723d46' }}>Dîner de mariage</h4>
                <p className="text-gray-700">Repas gastronomique servi dans la grande salle de réception.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="text-white rounded-full w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-sm flex-shrink-0" style={{ backgroundColor: '#c81315' }}>
                23:30
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif mb-2" style={{ color: '#723d46' }}>Fiesta</h4>
                <p className="text-gray-700">Soirée dansante pour célébrer notre union !</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jeudi 7 Mai */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="text-white p-6" style={{ backgroundColor: '#723d46' }}>
          <h3 className="text-2xl font-serif text-center">Jeudi 7 Mai 2026</h3>
        </div>
        <div className="p-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4 pb-4 border-b border-gray-200">
              <div className="text-white rounded-full w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#c81315' }}>
                <span className="text-lg sm:text-base" style={{ color: '#f8d7d7' }}>∞</span>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif mb-2" style={{ color: '#723d46' }}>Chill dans le domaine</h4>
                <p className="text-gray-700">Piscine, ping pong, jeux de cartes - Profitez des installations du domaine !</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4 pb-4 border-b border-gray-200">
              <div className="text-white rounded-full w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-sm flex-shrink-0" style={{ backgroundColor: '#c81315' }}>
                12:00
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif mb-2" style={{ color: '#723d46' }}>Brunch</h4>
                <p className="text-gray-700">Brunch convivial pour se remettre de la veille.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="text-white rounded-full w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-sm flex-shrink-0" style={{ backgroundColor: '#c81315' }}>
                20:00
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-serif mb-2" style={{ color: '#723d46' }}>Food truck</h4>
                <p className="text-gray-700">Dîner décontracté avec un food truck sur place.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendredi 8 Mai */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="text-white p-6" style={{ backgroundColor: '#723d46' }}>
          <h3 className="text-2xl font-serif text-center">Vendredi 8 Mai 2026</h3>
        </div>
        <div className="p-8">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="text-white rounded-full w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-sm flex-shrink-0" style={{ backgroundColor: '#c81315' }}>
              10:00
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-serif mb-2" style={{ color: '#723d46' }}>Fin des festivités</h4>
              <p className="text-gray-700">Départ du domaine à 11h.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Presence Component
const Presence = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitted(true);
    // The form will still submit to FormSubmit.co
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-center mb-12" style={{ color: '#723d46' }}>Confirmer votre présence</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: '#c81315' }} />
          <p className="text-lg text-gray-700">
            Merci de confirmer votre présence avant le 31 janvier 2026.
          </p>
        </div>
        
        <form action="https://formsubmit.co/samuelrochwerg1@gmail.com" method="POST" className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
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
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Votre message pour les mariés..."
            />
          </div>
          
          {/* Anti-spam field */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          
          {/* Disable CAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={isSubmitted}
              className={`px-8 py-3 rounded-lg font-medium transition-colors shadow-lg ${
                isSubmitted 
                  ? 'bg-green-600 text-white cursor-not-allowed' 
                  : 'text-white'
              }`}
              style={!isSubmitted ? { backgroundColor: '#723d46' } : {}}
            >
              {isSubmitted ? 'Votre confirmation a bien été envoyée' : 'Confirmer ma présence'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Hebergement Component
const Hebergement = () => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-serif text-center mb-12" style={{ color: '#723d46' }}>Hébergement</h1>
    <p className="text-lg text-gray-700 text-center mb-12">
      Le Hameau de Valouse dispose de 100 couchages 🛏️
      <br /><br />
      Nous pourrons donc normalement héberger la totalité de nos invités sur place, moyennnant une participation de 120 euros par adulte pour les deux nuits 🚀
      <br /><br />
      Pas de participation demandée pour les enfants ! 👶
      <br /><br />
      Vous pouvez régler la participation à l'hébergement par virement :
      <br /><br />
      <div className="flex justify-center mt-6 mb-6">
        <img 
          src="/rib.jpg.png" 
          alt="RIB - Relevé d'Identité Bancaire" 
          className="max-w-full h-auto rounded-lg shadow-lg"
          style={{ maxHeight: '400px' }}
        />
      </div>
      <br />
      Titulaire du compte : MLLE BENHAMOU JUSTINE
      <br /><br />
      IBAN : FR76 1131 5000 0104 6134 2437 301
      <br /><br />
      BIC : CEPAFRPP131
      <br /><br />
      RIB :
      <br />
      Code Banque : 11315
      <br />
      Code Guichet : 00001
      <br />
      N° du compte : 04613424373
      <br />
      Clé RIB : 01
      <br /><br />
      Banque : Caisse d'Épargne – Agence de Bollène
      <br />
      (Merci d'indiquer votre nom dans le libellé du virement 💌)
    </p>
    

    


  </div>
);

// Cagnotte Component
const Cagnotte = () => (
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl font-serif mb-12" style={{ color: '#723d46' }}>Cagnotte de mariage</h1>
    
    <div className="bg-white p-12 rounded-lg shadow-lg mb-8">
              <Gift className="w-16 h-16 mx-auto mb-6" style={{ color: '#c81315' }} />
      <h2 className="text-3xl font-serif mb-6" style={{ color: '#723d46' }}>Votre présence est le plus beau des cadeaux</h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Si toutefois vous souhaitiez nous faire plaisir, nous avons créé une cagnotte 
        qui nous aidera notamment à réaliser notre voyage de noces.
      </p>
      
              <div className="p-8 rounded-lg mb-8" style={{ backgroundColor: '#fdf2f2' }}>
        <h3 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>Comment participer ?</h3>
        <p className="text-gray-700 mb-4">
          Nous avons créé une cagnotte en ligne pour faciliter votre participation.
        </p>
        <div className="text-center">
                      <a 
              href="https://www.millemercismariage.com/samuel-justine/liste.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg"
              style={{ backgroundColor: '#723d46' }}
            >
              Accéder à notre cagnotte
            </a>
        </div>
      </div>
      
      <div className="bg-blue-50 p-8 rounded-lg">
        <h3 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>Notre projet</h3>
        <p className="text-gray-700 mb-4">
          Pour notre voyages de noces, nous rêvons d'évasion, de plages de sable blanc et de lagons turquoises... Un cadre idyllique pour débuter notre vie de couple marié. La destination n'est pas encore fixée, mais grâce à votre générosité, nous pourrons vivre une aventure unique.
        </p>
        <img 
          src="/ile-maurice.jpg" 
          alt="Île Maurice - Voyage de noces" 
          className="w-full h-auto max-h-64 object-contain rounded-lg"
        />
      </div>
    </div>
  </div>
);

// Politique de confidentialité Component
const PolitiqueConfidentialite = () => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-serif text-center mb-12" style={{ color: '#723d46' }}>Politique de confidentialité</h1>
    
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>1. Collecte des informations</h2>
        <p className="text-gray-700 mb-6">
          Nous collectons les informations que vous nous fournissez directement, notamment lors de la confirmation de votre présence à notre mariage. 
          Ces informations incluent votre nom, prénom, adresse e-mail, adresse postale et message optionnel.
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>2. Utilisation des informations</h2>
        <p className="text-gray-700 mb-6">
          Les informations collectées sont utilisées exclusivement pour :
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
          <li>Confirmer votre présence à notre mariage</li>
          <li>Vous contacter concernant les détails de l'événement</li>
          <li>Organiser l'hébergement et les repas</li>
          <li>Vous envoyer des informations pratiques sur le mariage</li>
        </ul>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>3. Protection des données</h2>
        <p className="text-gray-700 mb-6">
          Vos données personnelles sont protégées et ne seront jamais vendues, louées ou partagées avec des tiers, 
          sauf si la loi l'exige ou si vous nous donnez votre consentement explicite.
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>4. Conservation des données</h2>
        <p className="text-gray-700 mb-6">
          Vos données seront conservées jusqu'à la fin de l'organisation de notre mariage, 
          puis supprimées définitivement de nos systèmes.
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>5. Vos droits</h2>
        <p className="text-gray-700 mb-6">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous avez le droit de :
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
          <li>Accéder à vos données personnelles</li>
          <li>Rectifier vos données personnelles</li>
          <li>Supprimer vos données personnelles</li>
          <li>Limiter le traitement de vos données</li>
          <li>Vous opposer au traitement de vos données</li>
        </ul>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>6. Contact</h2>
        <p className="text-gray-700 mb-6">
          Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
          vous pouvez nous contacter à :
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">
            <strong>Samuel Rochwerg</strong><br />
            Email : samuelrochwerg1@gmail.com<br />
            Téléphone : 06 43 86 13 60
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Justine Benhamou Piana</strong><br />
            Email : justine.benhamou@gmail.com<br />
            Téléphone : 07 68 90 67 87
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Conditions générales Component
const ConditionsGenerales = () => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-serif text-center mb-12" style={{ color: '#723d46' }}>Conditions générales</h1>
    
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>1. Objet</h2>
        <p className="text-gray-700 mb-6">
          Les présentes conditions générales régissent l'utilisation de ce site web dédié à notre mariage 
          et les services associés, notamment la confirmation de présence et les informations pratiques.
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>2. Utilisation du site</h2>
        <p className="text-gray-700 mb-6">
          Ce site web est destiné exclusivement à nos invités pour :
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
          <li>Consulter les informations sur notre mariage</li>
          <li>Confirmer leur présence</li>
          <li>Obtenir des informations pratiques</li>
          <li>Accéder aux détails de l'hébergement</li>
        </ul>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>3. Confirmation de présence</h2>
        <p className="text-gray-700 mb-6">
          La confirmation de présence via le formulaire en ligne implique l'acceptation de ces conditions générales. 
          Les informations fournies doivent être exactes et complètes.
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>4. Hébergement</h2>
        <p className="text-gray-700 mb-6">
          L'hébergement proposé au Hameau de Valouse est soumis aux conditions suivantes :
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
          <li>Réservation obligatoire via notre formulaire</li>
          <li>Participation de 100€ par personne pour les deux nuits</li>
          <li>Gratuit pour les enfants</li>
          <li>Capacité limitée à 100 personnes</li>
        </ul>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>5. Cagnotte de mariage</h2>
        <p className="text-gray-700 mb-6">
          La participation à notre cagnotte de mariage est entièrement volontaire et ne constitue en aucun cas 
          une obligation pour assister à notre mariage.
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>6. Responsabilité</h2>
        <p className="text-gray-700 mb-6">
          Nous nous efforçons de fournir des informations exactes et à jour, mais nous ne pouvons garantir 
          l'exhaustivité ou l'exactitude de toutes les informations présentées sur ce site.
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>7. Modifications</h2>
        <p className="text-gray-700 mb-6">
          Nous nous réservons le droit de modifier ces conditions générales à tout moment. 
          Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>8. Droit applicable</h2>
        <p className="text-gray-700 mb-6">
          Les présentes conditions générales sont soumises au droit français. 
          Tout litige sera soumis à la compétence des tribunaux français.
        </p>
        
        <h2 className="text-2xl font-serif mb-4" style={{ color: '#723d46' }}>9. Contact</h2>
        <p className="text-gray-700 mb-6">
          Pour toute question concernant ces conditions générales, vous pouvez nous contacter à :
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">
            <strong>Samuel Rochwerg</strong><br />
            Email : samuelrochwerg1@gmail.com<br />
            Téléphone : 06 43 86 13 60
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Justine Benhamou Piana</strong><br />
            Email : justine.benhamou@gmail.com<br />
            Téléphone : 07 68 90 67 87
          </p>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { id: 'accueil', label: 'Accueil', icon: Home, path: '/' },
    { id: 'presence', label: 'Présence', icon: Heart, path: '/presence' },
    { id: 'infos', label: 'Infos pratiques', icon: MapPin, path: '/infos-pratiques' },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8" style={{ color: '#c81315' }} />
              <span className="text-2xl font-serif" style={{ color: '#723d46' }}>J & S</span>
            </div>
            
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.path)}
                                          className={`flex items-center space-x-1 xl:space-x-2 px-2 xl:px-4 py-2 rounded-lg transition-all duration-300 ${
                        getActiveSection() === item.id
                          ? 'text-white shadow-lg'
                          : 'hover:shadow-md'
                      }`}
                      style={getActiveSection() === item.id ? { backgroundColor: '#723d46' } : { color: '#723d46' }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm xl:text-base">{item.label}</span>
                  </button>
                );
              })}
            </nav>
            
            {/* Tablet and Mobile menu */}
            <div className="lg:hidden">
              <select
                value={getActiveSection()}
                onChange={(e) => {
                  const selectedItem = navigation.find(item => item.id === e.target.value);
                  if (selectedItem) {
                    navigate(selectedItem.path);
                  }
                }}
                className="border rounded-lg px-3 py-2 bg-white text-sm sm:text-base"
                style={{ borderColor: '#723d46', color: '#723d46' }}
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
          <Route path="/presence" element={<Presence />} />
          <Route path="/hebergement" element={<Hebergement />} />
          <Route path="/cagnotte" element={<Cagnotte />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/conditions-generales" element={<ConditionsGenerales />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="text-white" style={{ backgroundColor: '#723d46' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-serif mb-4">Contacts</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Samuel Rochwerg</p>
                                <p className="text-gray-200">06 43 86 13 60</p>
              <p className="text-gray-200">samuelrochwerg1@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Justine Benhamou Piana</p>
                  <p className="text-gray-200">07 68 90 67 87</p>
                  <p className="text-gray-200">justine.benhamou@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Legal Links */}
            <div>
              <h3 className="text-xl font-serif mb-4">Informations légales</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => navigate('/politique-confidentialite')}
                  className="block text-gray-200 hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </button>
                <button 
                  onClick={() => navigate('/conditions-generales')}
                  className="block text-gray-200 hover:text-white transition-colors"
                >
                  Conditions générales
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: '#5a2f37' }}>
            <div className="flex items-center justify-center space-x-2">
              <Heart className="w-5 h-5" style={{ color: '#c81315' }} />
              <p className="text-gray-200">© 2024 Justine & Samuel - Créé avec amour</p>
              <Heart className="w-5 h-5" style={{ color: '#c81315' }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;