import React from 'react';
import Link from 'next/link';
import { 
  FiThumbsUp, 
  FiMessageSquare, 
  FiBarChart2, 
  FiCheckSquare, 
  FiTrendingUp, 
  FiZap,
  FiUsers,
  FiEye,
  FiHeart,
  FiStar,
  FiAward,
  FiPieChart
} from 'react-icons/fi';

const VotesInteractionsLive = () => {
  const features = [
    {
      icon: <FiCheckSquare className="w-8 h-8" />,
      title: "Votes en Temps Réel",
      description: "Organisez des votes instantanés avec affichage des résultats en direct pour engager votre audience."
    },
    {
      icon: <FiMessageSquare className="w-8 h-8" />,
      title: "Questions-Réponses Live",
      description: "Permettez à vos participants de poser des questions et votez pour les meilleures interventions."
    },
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: "Sondages Interactifs",
      description: "Créez des sondages avec choix multiples, échelles de notation et questions ouvertes."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Analytics en Direct",
      description: "Visualisez les statistiques de participation et d'engagement en temps réel pendant l'événement."
    },
    {
      icon: <FiThumbsUp className="w-8 h-8" />,
      title: "Réactions Instantanées",
      description: "Emojis, likes et réactions pour mesurer l'engagement émotionnel de votre audience."
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Modération Intelligente",
      description: "Filtrage automatique et modération assistée par IA pour des interactions de qualité."
    }
  ];

  const voteTypes = [
    {
      icon: <FiCheckSquare className="w-12 h-12" />,
      title: "Vote Simple",
      description: "Votes oui/non ou choix unique pour des décisions rapides et claires.",
      features: [
        "Résultats instantanés",
        "Anonymat garanti",
        "Export des résultats",
        "Historique complet"
      ]
    },
    {
      icon: <FiPieChart className="w-12 h-12" />,
      title: "Vote Multiple",
      description: "Permettez aux participants de sélectionner plusieurs options parmi les choix proposés.",
      features: [
        "Jusqu'à 10 options",
        "Limitation du nombre de choix",
        "Graphiques en temps réel",
        "Analyse comparative"
      ]
    },
    {
      icon: <FiStar className="w-12 h-12" />,
      title: "Vote par Notation",
      description: "Système d'étoiles ou d'échelle pour évaluer et classer différentes propositions.",
      features: [
        "Échelles personnalisables",
        "Moyenne automatique",
        "Classement dynamique",
        "Commentaires optionnels"
      ]
    }
  ];

  const interactionFeatures = [
    {
      number: "01",
      title: "Chat Modéré en Direct",
      description: "Échanges en temps réel entre participants et intervenants avec système de modération avancé.",
      icon: <FiMessageSquare className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Wall of Fame",
      description: "Mettez en avant les meilleures contributions et questions les plus votées par l'audience.",
      icon: <FiAward className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Nuage de Mots",
      description: "Visualisation interactive des mots-clés et thèmes les plus mentionnés par les participants.",
      icon: <FiTrendingUp className="w-8 h-8" />
    }
  ];

  const engagementTools = [
    {
      title: "Quiz Interactifs",
      description: "Testez les connaissances de votre audience avec des quiz gamifiés",
      icon: "🎯",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Réactions Emoji",
      description: "Collectez les émotions en temps réel avec des réactions emoji",
      icon: "😊",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Classements Live",
      description: "Tableaux de bord des participants les plus actifs et engagés",
      icon: "🏆",
      color: "from-blue-700 to-blue-800"
    },
    {
      title: "Alertes Push",
      description: "Notifications instantanées pour les moments clés de l'événement",
      icon: "🔔",
      color: "from-blue-800 to-blue-900"
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
              <FiThumbsUp className="w-10 h-10" />
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Votes Électroniques & Interactions Live
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Engagez votre audience avec des outils d'interaction en temps réel et des votes sécurisés
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
              Fonctionnalités d'Interaction
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des outils puissants pour transformer vos participants passifs en audience active et engagée
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

      {/* Vote Types Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types de Votes Disponibles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plusieurs formats de vote pour s'adapter à tous vos besoins et scénarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {voteTypes.map((type, index) => (
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
                      <FiCheckSquare className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interaction Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Interactions Avancées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Créez une expérience immersive et participative pour votre audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interactionFeatures.map((feature, index) => (
              <div 
                key={index}
                className="relative p-8 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {feature.number}
                </div>
                <div className="mt-6">
                  <div className="text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Tools Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Outils d'Engagement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gamification et mécaniques d'engagement pour maximiser la participation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementTools.map((tool, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-xl text-center"
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Reliability Section */}
      {/* <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sécurité & Fiabilité des Votes
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                Notre système garantit l'intégrité et la confidentialité de tous les votes électroniques.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheckSquare className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Anonymat Total</div>
                    <div className="text-blue-200 text-sm">Les votes sont anonymes et ne peuvent être tracés aux participants</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiZap className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Un Vote par Personne</div>
                    <div className="text-blue-200 text-sm">Détection automatique et blocage des tentatives de votes multiples</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiEye className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Traçabilité Complète</div>
                    <div className="text-blue-200 text-sm">Audit trail complet pour vérifier l'intégrité des résultats</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiUsers className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Votes Ouverts ou Fermés</div>
                    <div className="text-blue-200 text-sm">Choisissez entre votes publics ou anonymes selon vos besoins</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-blue-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Conformité & Standards</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-700 rounded-lg">
                  <span className="font-semibold">Cryptage des Données</span>
                  <FiCheckSquare className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-700 rounded-lg">
                  <span className="font-semibold">Conformité RGPD</span>
                  <FiCheckSquare className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-700 rounded-lg">
                  <span className="font-semibold">Backup Automatique</span>
                  <FiCheckSquare className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-700 rounded-lg">
                  <span className="font-semibold">Anti-Fraude IA</span>
                  <FiCheckSquare className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact sur l'Engagement
            </h2>
            <p className="text-blue-100 text-lg">
              Des résultats mesurables pour vos événements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">+85%</div>
              <div className="text-blue-100">Taux de Participation</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Votes Simultanés</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">&lt;0.5s</div>
              <div className="text-blue-100">Temps de Réponse</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Fiabilité</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cas d'Usage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🏢</span>
                Assemblées Générales
              </h3>
              <p className="text-gray-600 mb-4">
                Votes statutaires, élections de conseil d'administration, et décisions stratégiques en toute conformité.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Quorum automatique
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Procès-verbal généré
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Certification des résultats
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎓</span>
                Formations & Webinaires
              </h3>
              <p className="text-gray-600 mb-4">
                Quiz pédagogiques, sondages de compréhension et évaluations à chaud pour maximiser l'apprentissage.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Questions interactives
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Feedback instantané
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Gamification
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎤</span>
                Conférences & Panels
              </h3>
              <p className="text-gray-600 mb-4">
                Questions du public, votes pour les meilleurs sujets et réactions en temps réel pendant les interventions.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Q&A modéré
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Upvotes des questions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Live feedback
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎉</span>
                Événements Grand Public
              </h3>
              <p className="text-gray-600 mb-4">
                Concours, jeux interactifs et choix du public pour créer une expérience mémorable et engageante.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Jeux en temps réel
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Classements live
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Récompenses virtuelles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transformez Vos Participants en Acteurs
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Créez des expériences interactives mémorables avec nos outils de vote et d'engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/DemoRequest">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Essayer Maintenant
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

export default VotesInteractionsLive;