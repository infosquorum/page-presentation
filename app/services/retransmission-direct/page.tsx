import React from 'react';
import Link from 'next/link';
import { 
  FiVideo, 
  FiMonitor, 
  FiSmartphone, 
  FiWifi, 
  FiClock, 
  FiUsers,
  FiPlay,
  FiPauseCircle,
  FiRadio,
  FiSettings,
  FiDownload,
  FiMessageCircle,
  FiCheck
} from 'react-icons/fi';

const RetransmissionDirect = () => {
  const features = [
    {
      icon: <FiVideo className="w-8 h-8" />,
      title: "Streaming HD & 4K",
      description: "Diffusez vos événements en haute définition avec une qualité d'image exceptionnelle jusqu'à 4K."
    },
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Multi-Dispositifs",
      description: "Compatible avec tous les appareils : ordinateurs, tablettes, smartphones et smart TV."
    },
    {
      icon: <FiWifi className="w-8 h-8" />,
      title: "Streaming Adaptatif",
      description: "Ajustement automatique de la qualité selon la bande passante pour une lecture fluide."
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "Enregistrement Automatique",
      description: "Sauvegarde automatique de vos lives pour une diffusion en replay illimitée."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Capacité Illimitée",
      description: "Accueillez des milliers de spectateurs simultanés sans limite de connexions."
    },
    {
      icon: <FiMessageCircle className="w-8 h-8" />,
      title: "Chat en Direct",
      description: "Interagissez avec votre audience via un système de chat modéré en temps réel."
    }
  ];

  const streamingTypes = [
    {
      icon: <FiRadio className="w-12 h-12" />,
      title: "Streaming en Direct",
      description: "Diffusez votre événement en temps réel avec une latence ultra-faible de moins de 3 secondes.",
      features: [
        "Latence minimale < 3s",
        "Interaction en temps réel",
        "Chat et sondages live",
        "Modération instantanée"
      ]
    },
    {
      icon: <FiPauseCircle className="w-12 h-12" />,
      title: "Diffusion Différée",
      description: "Programmez la diffusion de vos contenus pré-enregistrés selon votre calendrier éditorial.",
      features: [
        "Programmation flexible",
        "Qualité optimale garantie",
        "Montage et post-production",
        "Multi-langues et sous-titres"
      ]
    },
    {
      icon: <FiPlay className="w-12 h-12" />,
      title: "Mode Hybride",
      description: "Combinez live et replay pour maximiser l'audience et l'engagement de vos participants.",
      features: [
        "Live + replay automatique",
        "Accès à la demande",
        "Archives consultables",
        "Statistiques détaillées"
      ]
    }
  ];

  const technicalAdvantages = [
    {
      number: "01",
      title: "Infrastructure Robuste",
      description: "Serveurs répartis mondialement avec CDN optimisé pour une diffusion sans interruption.",
      icon: <FiSettings className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Encodage Avancé",
      description: "Compression intelligente H.264/H.265 pour une qualité maximale avec un débit minimal.",
      icon: <FiMonitor className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Backup Automatique",
      description: "Redondance des flux et basculement automatique en cas de problème technique.",
      icon: <FiDownload className="w-8 h-8" />
    }
  ];

  const useCases = [
    {
      title: "Conférences & Séminaires",
      description: "Élargissez votre audience au-delà des limites physiques de votre salle.",
      image: "📊"
    },
    {
      title: "Formations & Webinaires",
      description: "Proposez des sessions de formation accessibles partout dans le monde.",
      image: "🎓"
    },
    {
      title: "Concerts & Spectacles",
      description: "Partagez vos performances artistiques avec des milliers de spectateurs.",
      image: "🎵"
    },
    {
      title: "Événements Sportifs",
      description: "Retransmettez vos compétitions avec des replays et analyses en direct.",
      image: "⚽"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white pb-15 pt-30 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <FiVideo className="w-10 h-10" />
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Retransmission en Direct ou Différée
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Diffusez vos événements en streaming haute qualité avec une infrastructure professionnelle et fiable
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
              Fonctionnalités de Streaming
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une plateforme complète pour diffuser vos événements en direct ou en différé avec une qualité professionnelle
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

      {/* Streaming Types Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Modes de Diffusion
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez le mode de diffusion adapté à vos besoins et objectifs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {streamingTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-blue-600 mb-4">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FiCheck className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Excellence Technique
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une infrastructure de pointe pour garantir la qualité de vos diffusions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalAdvantages.map((advantage, index) => (
              <div 
                key={index}
                className="relative p-8 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {advantage.number}
                </div>
                <div className="mt-6">
                  <div className="text-blue-600 mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cas d'Usage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions de streaming adaptées à tous types d'événements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-xl text-center"
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {useCase.image}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Performance Garantie
            </h2>
            <p className="text-blue-100 text-lg">
              Des chiffres qui témoignent de la qualité de notre infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Garanti</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">&lt;3s</div>
              <div className="text-blue-100">Latence Moyenne</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">100K+</div>
              <div className="text-blue-100">Viewers Simultanés</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">4K</div>
              <div className="text-blue-100">Qualité Maximale</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Comparison */}
      {/* <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fonctionnalités Incluses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FiCheck className="w-6 h-6 mr-3 text-blue-300" />
                Fonctionnalités Standard
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Streaming HD jusqu'à 1080p
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Chat en direct modéré
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Enregistrement automatique
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Statistiques de base
                </li>
              </ul>
            </div>

            <div className="bg-blue-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FiCheck className="w-6 h-6 mr-3 text-blue-300" />
                Fonctionnalités Premium
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Streaming 4K Ultra HD
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Multi-caméras et transitions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Sous-titres en temps réel
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Analytics avancés avec IA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Diffuser Votre Prochain Événement ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Essayez notre plateforme de Event Quorum maintenant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/DemoRequest">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Démarrer dès Maintenant
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

export default RetransmissionDirect;