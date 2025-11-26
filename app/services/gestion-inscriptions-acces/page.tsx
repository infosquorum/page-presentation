import React from 'react';
import Link from 'next/link';
import { 
  FiUserPlus, 
  FiCheckCircle, 
  FiLock, 
  FiMail, 
  FiCode, 
  FiShield,
  FiUserCheck,
  FiDatabase,
  FiFilter,
  FiClipboard,
  FiUsers,
  FiKey
} from 'react-icons/fi';

const GestionInscriptionsAcces = () => {
  const features = [
    {
      icon: <FiUserPlus className="w-8 h-8" />,
      title: "Inscription Simplifiée",
      description: "Formulaires d'inscription personnalisables et intuitifs pour faciliter l'enregistrement des participants."
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Validation Automatique",
      description: "Vérification instantanée des inscriptions avec confirmation par email et SMS automatiques."
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Badges & QR Codes",
      description: "Génération automatique de badges numériques et QR codes uniques pour chaque participant."
    },
    {
      icon: <FiLock className="w-8 h-8" />,
      title: "Contrôle d'Accès",
      description: "Gestion sécurisée des accès avec différents niveaux de permissions selon les profils."
    },
    {
      icon: <FiMail className="w-8 h-8" />,
      title: "Communication Ciblée",
      description: "Envoi d'emails et SMS personnalisés selon les groupes et statuts d'inscription."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Données Sécurisées",
      description: "Protection RGPD complète avec cryptage des données personnelles des participants."
    }
  ];

  const accessManagement = [
    {
      icon: <FiUserCheck className="w-12 h-12" />,
      title: "Vérification à l'Entrée",
      description: "Système de scan QR code instantané pour valider l'accès des participants en temps réel.",
      features: [
        "Scan ultra-rapide < 1s",
        "Validation multi-critères",
        "Détection de doublons",
        "Mode offline disponible"
      ]
    },
    {
      icon: <FiKey className="w-12 h-12" />,
      title: "Gestion des Permissions",
      description: "Définissez des profils d'accès personnalisés selon les types de participants et zones.",
      features: [
        "Zones d'accès multiples",
        "Horaires configurables",
        "Accès VIP et premium",
        "Transferts de badges"
      ]
    },
    {
      icon: <FiDatabase className="w-12 h-12" />,
      title: "Base de Données Centralisée",
      description: "Toutes vos données d'inscription centralisées et accessibles en temps réel.",
      features: [
        "Export facile (CSV, Excel)",
        "Recherche avancée",
        "Statistiques en direct",
        "Historique complet"
      ]
    }
  ];

  const registrationTypes = [
    {
      number: "01",
      title: "Inscription Libre",
      description: "Ouverture des inscriptions sans restriction avec validation automatique. Idéal pour les événements publics.",
      icon: <FiUsers className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Inscription Modérée",
      description: "Validation manuelle des inscriptions par l'organisateur pour filtrer les participants. Parfait pour les événements professionnels.",
      icon: <FiClipboard className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Inscription sur Invitation",
      description: "Accès réservé aux personnes invitées avec codes d'accès personnalisés. Pour les événements privés et exclusifs.",
      icon: <FiLock className="w-8 h-8" />
    }
  ];

  const scanningFeatures = [
    {
      title: "Application Mobile",
      description: "Application dédiée pour iOS et Android permettant le scan des badges",
      icon: "📱"
    },
    {
      title: "Tablettes de Contrôle",
      description: "Interface optimisée pour tablettes aux points de contrôle d'accès",
      icon: "💻"
    },
    {
      title: "Lecteurs Physiques",
      description: "Compatible avec les lecteurs de QR codes et badges NFC professionnels",
      icon: "🔍"
    },
    {
      title: "Mode Hors-ligne",
      description: "Fonctionnement garanti même sans connexion internet avec synchronisation",
      icon: "📡"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white pb-15 pt-30 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <FiUserCheck className="w-10 h-10" />
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Gestion des Inscriptions et des Accès
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Simplifiez l'enregistrement de vos participants et sécurisez les accès à vos événements
            </p>
            
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fonctionnalités Complètes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tous les outils nécessaires pour gérer efficacement vos inscriptions et contrôler les accès
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300"
              >
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Management Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contrôle d'Accès Intelligent
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions avancées pour gérer les flux d'entrée et garantir la sécurité de votre événement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessManagement.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FiCheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Types Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types d'Inscription
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez le mode d'inscription adapté à votre événement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {registrationTypes.map((type, index) => (
              <div 
                key={index}
                className="relative p-8 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {type.number}
                </div>
                <div className="mt-6">
                  <div className="text-blue-600 mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Code & Scanning Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Scan QR Code Ultra-Rapide
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre système de scan permet de valider l'accès des participants en moins d'une seconde, même en cas d'affluence importante.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCode className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">QR Codes Uniques</div>
                    <div className="text-gray-600 text-sm">Chaque participant reçoit un QR code unique et crypté</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiShield className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Anti-Contrefaçon</div>
                    <div className="text-gray-600 text-sm">Détection automatique des tentatives de fraude et duplications</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Validation Instantanée</div>
                    <div className="text-gray-600 text-sm">Feedback visuel et sonore immédiat lors du scan</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiDatabase className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800 mb-1">Suivi en Temps Réel</div>
                    <div className="text-gray-600 text-sm">Tableau de bord en direct du taux de présence</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {scanningFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 text-center"
                >
                  <div className="text-5xl mb-3">{feature.icon}</div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Performance Exceptionnelle
            </h2>
            <p className="text-blue-100 text-lg">
              Des chiffres qui démontrent l'efficacité de notre système
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">&lt;1s</div>
              <div className="text-blue-100">Temps de Scan</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Taux de Lecture</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Scans/Minute</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">0%</div>
              <div className="text-blue-100">Taux de Fraude</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Data Management Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gestion Avancée des Données
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Exploitez pleinement les informations de vos participants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-800 p-6 rounded-xl">
              <FiFilter className="w-8 h-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Filtres Puissants</h3>
              <p className="text-blue-200 text-sm">
                Segmentez vos participants selon de multiples critères : statut, catégorie, date d'inscription, présence, etc.
              </p>
            </div>

            <div className="bg-blue-800 p-6 rounded-xl">
              <FiMail className="w-8 h-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Communication Ciblée</h3>
              <p className="text-blue-200 text-sm">
                Envoyez des messages personnalisés à des groupes spécifiques de participants avec templates prédéfinis.
              </p>
            </div>

            <div className="bg-blue-800 p-6 rounded-xl">
              <FiDatabase className="w-8 h-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-3">Export Facilité</h3>
              <p className="text-blue-200 text-sm">
                Exportez vos données aux formats CSV, Excel ou PDF pour vos analyses et rapports externes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simplifiez la Gestion de Vos Participants
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Démarrez dès maintenant avec notre solution complète d'inscription et contrôle d'accès
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/DemoRequest">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Essayer Gratuitement
              </button>
            </Link>
            <Link href="/">
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Retour à l'accueil
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default GestionInscriptionsAcces;