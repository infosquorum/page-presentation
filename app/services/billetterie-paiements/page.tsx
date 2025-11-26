import React from 'react';
import Link from 'next/link';
import { 
  FiCreditCard, 
  FiShield, 
  FiCheck, 
  FiDollarSign, 
  FiBarChart2, 
  FiRefreshCw,
  FiLock,
  FiGlobe,
  FiTrendingUp
} from 'react-icons/fi';

const BilletterieEtPaiements = () => {
  const features = [
    {
      icon: <FiCreditCard className="w-8 h-8" />,
      title: "Paiements Multiples",
      description: "Acceptez les cartes bancaires, Mobile Money, et virements bancaires pour faciliter l'accès à vos événements."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Transactions Sécurisées",
      description: "Cryptage SSL et conformité PCI-DSS pour garantir la sécurité de toutes les transactions financières."
    },
    {
      icon: <FiCheck className="w-8 h-8" />,
      title: "Validation Instantanée",
      description: "Génération et envoi automatique des billets par email dès confirmation du paiement."
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: "Tarification Flexible",
      description: "Créez des tarifs différenciés, des offres early bird, et des promotions personnalisées."
    },
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: "Reporting Détaillé",
      description: "Suivez vos ventes en temps réel avec des tableaux de bord et rapports financiers détaillés."
    },
    {
      icon: <FiRefreshCw className="w-8 h-8" />,
      title: "Remboursements Simplifiés",
      description: "Gérez facilement les annulations et remboursements avec un processus automatisé et traçable."
    }
  ];

  const paymentMethods = [
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      name: "Cartes Bancaires",
      description: "Visa, Mastercard, American Express"
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      name: "Mobile Money",
      description: "Orange Money, MTN Money, Moov Money, Wave CI"
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      name: "Virements",
      description: "Virements bancaires locaux et internationaux"
    },
    {
      icon: <FiLock className="w-6 h-6" />,
      name: "Paiement Sécurisé",
      description: "Cryptage de bout en bout"
    }
  ];

  const pricingFeatures = [
    {
      number: "01",
      title: "Tarification Dynamique",
      description: "Ajustez automatiquement vos prix en fonction de la demande et du temps restant avant l'événement.",
      icon: <FiTrendingUp className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Codes Promotionnels",
      description: "Créez des codes de réduction personnalisés pour vos partenaires, sponsors ou campagnes marketing.",
      icon: <FiCheck className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Gestion des Taxes",
      description: "Configuration automatique des taxes selon les réglementations locales et internationales.",
      icon: <FiBarChart2 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white pb-15 pt-30 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Billetterie en Ligne & Gestion des Paiements
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Simplifiez vos ventes de billets et optimisez vos revenus avec notre solution de paiement complète
            </p>
            
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fonctionnalités de Billetterie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une solution complète pour gérer vos ventes et encaissements en toute sérénité
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

      {/* Payment Methods Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Méthodes de Paiement Acceptées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Offrez à vos participants plusieurs options de paiement pour maximiser vos ventes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {method.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Gestion Avancée des Tarifs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des outils puissants pour optimiser votre stratégie tarifaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingFeatures.map((feature, index) => (
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

      {/* Security Section */}
      {/* <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sécurité & Conformité
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                Vos transactions sont protégées par les plus hauts standards de sécurité de l'industrie.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiShield className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Cryptage SSL/TLS</div>
                    <div className="text-blue-200 text-sm">Protection de bout en bout de toutes les données sensibles</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiLock className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Conformité PCI-DSS</div>
                    <div className="text-blue-200 text-sm">Certification niveau 1 pour le traitement des cartes bancaires</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiCheck className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Conformité RGPD</div>
                    <div className="text-blue-200 text-sm">Protection des données personnelles selon les normes européennes</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <FiRefreshCw className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Détection de Fraude</div>
                    <div className="text-blue-200 text-sm">Système intelligent de prévention des transactions frauduleuses</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-blue-800 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-200 text-sm">Disponibilité</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">&lt;2s</div>
                  <div className="text-blue-200 text-sm">Temps de Transaction</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">100K+</div>
                  <div className="text-blue-200 text-sm">Transactions/Mois</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">0</div>
                  <div className="text-blue-200 text-sm">Fraudes Détectées</div>
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
              Des Chiffres Qui Parlent
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">2.5M€</div>
              <div className="text-blue-100">Transactions Traitées</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Devises Acceptées</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">24h</div>
              <div className="text-blue-100">Versement Express</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">1.5%</div>
              <div className="text-blue-100">Commission Compétitive</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Commencez à Vendre Vos Billets Dès Aujourd'hui
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Aucun frais d'installation. Commissions transparentes. Support dédié.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/DemoRequest">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Créer Mon Compte
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

export default BilletterieEtPaiements;