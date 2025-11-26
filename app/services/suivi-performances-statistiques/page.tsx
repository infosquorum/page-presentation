import React from 'react';
import Link from 'next/link';
import { 
  FiBarChart2, 
  FiTrendingUp, 
  FiPieChart, 
  FiActivity, 
  FiDownload, 
  FiEye,
  FiUsers,
  FiClock,
  FiTarget,
  FiAlertCircle,
  FiZap,
  FiDatabase
} from 'react-icons/fi';

const SuiviPerformancesStatistiques = () => {
  const features = [
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: "Tableaux de Bord Personnalisés",
      description: "Créez des dashboards sur mesure avec les métriques qui comptent vraiment pour votre événement."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Analytics en Temps Réel",
      description: "Suivez les performances de votre événement en direct avec des données actualisées à la seconde."
    },
    {
      icon: <FiPieChart className="w-8 h-8" />,
      title: "Visualisations Avancées",
      description: "Graphiques interactifs, diagrammes et charts pour comprendre vos données en un coup d'œil."
    },
    {
      icon: <FiDownload className="w-8 h-8" />,
      title: "Exports Multiples",
      description: "Exportez vos rapports en PDF, Excel, CSV ou PowerPoint pour vos présentations."
    },
    {
      icon: <FiActivity className="w-8 h-8" />,
      title: "Rapports Automatisés",
      description: "Planifiez l'envoi automatique de rapports quotidiens, hebdomadaires ou mensuels."
    },
    {
      icon: <FiEye className="w-8 h-8" />,
      title: "Analyse Comportementale",
      description: "Comprenez le parcours et le comportement de vos participants grâce à l'IA."
    }
  ];

  const kpiCategories = [
    {
      icon: <FiUsers className="w-12 h-12" />,
      title: "Métriques de Participation",
      description: "Suivez l'engagement et la participation de votre audience en détail.",
      metrics: [
        "Taux de participation en direct",
        "Durée moyenne de présence",
        "Taux de complétion",
        "Taux de rebond"
      ]
    },
    {
      icon: <FiTarget className="w-12 h-12" />,
      title: "Performance Commerciale",
      description: "Analysez vos ventes, revenus et conversions pour optimiser votre ROI.",
      metrics: [
        "Chiffre d'affaires généré",
        "Taux de conversion",
        "Panier moyen",
        "Performance par canal"
      ]
    },
    {
      icon: <FiZap className="w-12 h-12" />,
      title: "Engagement & Interactions",
      description: "Mesurez le niveau d'engagement à travers les différentes interactions.",
      metrics: [
        "Nombre de votes/sondages",
        "Messages dans le chat",
        "Questions posées",
        "Réactions émotionnelles"
      ]
    }
  ];

  const reportTypes = [
    {
      number: "01",
      title: "Rapport Exécutif",
      description: "Vue d'ensemble stratégique avec les KPIs essentiels et recommandations pour la direction.",
      icon: <FiBarChart2 className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Rapport Détaillé",
      description: "Analyse approfondie de toutes les métriques avec comparaisons historiques et benchmarks.",
      icon: <FiActivity className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Rapport Personnalisé",
      description: "Créez vos propres rapports en sélectionnant les données et visualisations pertinentes.",
      icon: <FiPieChart className="w-8 h-8" />
    }
  ];

  const analyticsTools = [
    {
      title: "Cartes de Chaleur",
      description: "Visualisez les zones d'intérêt et points d'attention de votre audience",
      icon: "🔥",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Tunnels de Conversion",
      description: "Analysez le parcours complet depuis l'inscription jusqu'à l'achat",
      icon: "🎯",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Segmentation Avancée",
      description: "Découpez votre audience selon des critères multiples",
      icon: "📊",
      color: "from-blue-700 to-blue-800"
    },
    {
      title: "Prédictions IA",
      description: "Algorithmes prédictifs pour anticiper les tendances futures",
      icon: "🤖",
      color: "from-blue-800 to-blue-900"
    }
  ];

  const dataPoints = [
    {
      category: "Données Participants",
      items: [
        "Profil démographique",
        "Localisation géographique",
        "Comportement de navigation",
        "Historique de participation"
      ]
    },
    {
      category: "Données d'Engagement",
      items: [
        "Temps passé par session",
        "Interactions par participant",
        "Taux de complétion",
        "Satisfaction globale"
      ]
    },
    {
      category: "Données Commerciales",
      items: [
        "Ventes par catégorie",
        "Revenue par participant",
        "Codes promo utilisés",
        "Performance des sponsors"
      ]
    },
    {
      category: "Données Techniques",
      items: [
        "Qualité de streaming",
        "Temps de chargement",
        "Erreurs rencontrées",
        "Appareils utilisés"
      ]
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
              <FiBarChart2 className="w-10 h-10" />
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Suivi des Performances & Statistiques
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transformez vos données en insights actionnables avec des analytics avancés et des rapports personnalisés
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
              Fonctionnalités Analytics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des outils puissants pour mesurer, analyser et optimiser les performances de vos événements
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

      {/* KPI Categories Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Indicateurs Clés de Performance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Suivez les métriques essentielles pour piloter efficacement vos événements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kpiCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-blue-600 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-3">
                  {category.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FiTrendingUp className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Types Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types de Rapports
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Différents formats de rapports pour répondre à tous vos besoins d'analyse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reportTypes.map((type, index) => (
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

      {/* Analytics Tools Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Outils d'Analyse Avancés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies de pointe pour des analyses approfondies et prédictives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsTools.map((tool, index) => (
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

      {/* Data Points Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Données Collectées & Analysées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plus de 100 points de données pour une vision à 360° de votre événement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataPoints.map((dataPoint, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <FiDatabase className="w-5 h-5 text-blue-600 mr-2" />
                  {dataPoint.category}
                </h3>
                <ul className="space-y-2">
                  {dataPoint.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Dashboard Section */}
      {/* <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tableaux de Bord en Temps Réel
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                Suivez l'évolution de vos événements en direct avec des dashboards actualisés à la seconde.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiClock className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Actualisation Instantanée</div>
                    <div className="text-blue-200 text-sm">Données mises à jour en temps réel sans rechargement de page</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiAlertCircle className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Alertes Intelligentes</div>
                    <div className="text-blue-200 text-sm">Notifications automatiques en cas d'anomalie ou opportunité</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiEye className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Vues Personnalisables</div>
                    <div className="text-blue-200 text-sm">Créez autant de dashboards que nécessaire selon vos besoins</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiUsers className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Partage d'Équipe</div>
                    <div className="text-blue-200 text-sm">Partagez vos dashboards avec vos collaborateurs en un clic</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-blue-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Métriques en Direct</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-700 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">1,247</div>
                  <div className="text-blue-200 text-sm">Participants Actifs</div>
                  <div className="text-green-400 text-xs mt-1 flex items-center justify-center">
                    <FiTrendingUp className="w-3 h-3 mr-1" />
                    +12%
                  </div>
                </div>
                <div className="bg-blue-700 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">89%</div>
                  <div className="text-blue-200 text-sm">Taux d'Engagement</div>
                  <div className="text-green-400 text-xs mt-1 flex items-center justify-center">
                    <FiTrendingUp className="w-3 h-3 mr-1" />
                    +5%
                  </div>
                </div>
                <div className="bg-blue-700 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">342</div>
                  <div className="text-blue-200 text-sm">Interactions/min</div>
                  <div className="text-green-400 text-xs mt-1 flex items-center justify-center">
                    <FiTrendingUp className="w-3 h-3 mr-1" />
                    +8%
                  </div>
                </div>
                <div className="bg-blue-700 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold mb-2">4.8</div>
                  <div className="text-blue-200 text-sm">Satisfaction</div>
                  <div className="text-blue-300 text-xs mt-1">/ 5.0</div>
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
              Puissance de nos Analytics
            </h2>
            <p className="text-blue-100 text-lg">
              Des chiffres qui parlent d'eux-mêmes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Points de Données</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">&lt;1s</div>
              <div className="text-blue-100">Latence Analytics</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Types de Graphiques</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">∞</div>
              <div className="text-blue-100">Rapports Personnalisés</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Export & Integration Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Export & Intégrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connectez vos données avec vos outils préférés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 text-center">
              <FiDownload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Formats d'Export</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>PDF • Excel • CSV</li>
                <li>PowerPoint • JSON</li>
                <li>Google Sheets</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 text-center">
              <FiZap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Intégrations</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Google Analytics</li>
                <li>Tableau • Power BI</li>
                <li>API REST disponible</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 text-center">
              <FiClock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Automatisation</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Rapports planifiés</li>
                <li>Webhooks personnalisés</li>
                <li>Alertes email/SMS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prenez des Décisions Éclairées avec Nos Analytics
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transformez vos données d'événements en stratégies gagnantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/DemoRequest">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Découvrir nos Analytics
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

export default SuiviPerformancesStatistiques;