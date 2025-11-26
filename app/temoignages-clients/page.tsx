import React from 'react';
import Link from 'next/link';
import { 
  FiStar, 
  FiUser, 
  FiMapPin, 
  FiCalendar,
  FiThumbsUp,
  FiAward,
  FiHeart,
  FiTrendingUp
} from 'react-icons/fi';

const TemoignagesClients = () => {
  const testimonials = [
    {
      name: "Sophie Kouassi",
      role: "Directrice Marketing",
      company: "TechCorp Afrique",
      location: "Abidjan, Côte d'Ivoire",
      image: "👩🏾‍💼",
      rating: 5,
      date: "Novembre 2024",
      text: "EventQuorum a transformé notre façon d'organiser nos événements corporate. La plateforme est intuitive et le support client est exceptionnel. Nous avons réussi à organiser 5 conférences majeures cette année avec plus de 2000 participants au total.",
      eventType: "Conférences B2B"
    },
    {
      name: "Marc Diallo",
      role: "CEO",
      company: "Innovation Hub",
      location: "Dakar, Sénégal",
      image: "👨🏿‍💼",
      rating: 5,
      date: "Octobre 2024",
      text: "La fonctionnalité de streaming en direct est un game-changer ! Nous avons pu toucher une audience internationale pour notre summit technologique. Les analyses en temps réel nous ont permis d'ajuster notre contenu à la volée.",
      eventType: "Summit Tech"
    },
    {
      name: "Aminata Traoré",
      role: "Responsable Formation",
      company: "EduPlus",
      location: "Ouagadougou, Burkina Faso",
      image: "👩🏿‍🏫",
      rating: 5,
      date: "Septembre 2024",
      text: "Parfait pour nos webinaires de formation ! Le système de questions-réponses et les sondages interactifs maintiennent nos apprenants engagés. Le taux de complétion de nos formations a augmenté de 40%.",
      eventType: "Formation en ligne"
    },
    {
      name: "Jean-Pierre Mensah",
      role: "Président",
      company: "Association des Entrepreneurs",
      location: "Lomé, Togo",
      image: "👨🏾‍💼",
      rating: 5,
      date: "Août 2024",
      text: "Le système de billetterie et de gestion des inscriptions nous a fait gagner un temps précieux. Plus besoin de jongler entre plusieurs outils. Tout est centralisé et efficace. Notre dernière AG a réuni 500 membres sans aucun problème.",
      eventType: "Assemblée Générale"
    },
    {
      name: "Fatoumata Cissé",
      role: "Event Manager",
      company: "Festival des Arts",
      location: "Bamako, Mali",
      image: "👩🏿‍🎨",
      rating: 5,
      date: "Juillet 2024",
      text: "L'expérience utilisateur est remarquable. Nos participants ont adoré l'application mobile et la facilité d'accès aux contenus. Les codes QR pour l'accès ont fluidifié considérablement nos entrées.",
      eventType: "Festival Culturel"
    },
    {
      name: "Ibrahim Touré",
      role: "Directeur des Ventes",
      company: "Global Services",
      location: "Abidjan, Côte d'Ivoire",
      image: "👨🏿‍💼",
      rating: 5,
      date: "Juin 2024",
      text: "ROI exceptionnel ! EventQuorum nous a permis d'augmenter nos ventes de billets de 60% grâce aux fonctionnalités de marketing intégrées. Les rapports détaillés nous aident à optimiser chaque événement.",
      eventType: "Salons Professionnels"
    }
  ];

  const stats = [
    {
      icon: <FiThumbsUp className="w-8 h-8" />,
      value: "98%",
      label: "Satisfaction Client"
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      value: "500+",
      label: "Événements Réussis"
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      value: "4.9/5",
      label: "Note Moyenne"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      value: "50K+",
      label: "Participants Satisfaits"
    }
  ];

  const clientLogos = [
    { name: "TechCorp", icon: "🏢" },
    { name: "Innovation Hub", icon: "💡" },
    { name: "EduPlus", icon: "🎓" },
    { name: "Festival des Arts", icon: "🎨" },
    { name: "Global Services", icon: "🌍" },
    { name: "Entrepreneurs", icon: "💼" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <FiStar className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Témoignages Clients
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de leur expérience avec EventQuorum
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-blue-100"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des retours authentiques de professionnels qui utilisent EventQuorum au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-5xl mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-sm font-semibold text-blue-600">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-blue-100">
                  <div className="flex items-center">
                    <FiMapPin className="w-4 h-4 mr-1" />
                    {testimonial.location}
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="w-4 h-4 mr-1" />
                    {testimonial.date}
                  </div>
                </div>
                
                <div className="mt-3">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                    {testimonial.eventType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ils Nous Font Confiance
            </h2>
            <p className="text-lg text-gray-600">
              Rejoignez des centaines d'organisations qui utilisent EventQuorum
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="text-5xl mb-2">{client.icon}</div>
                <p className="text-sm font-semibold text-gray-700">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Histoires de Réussite
            </h2>
            <p className="text-blue-100 text-lg">
              Des résultats concrets qui parlent d'eux-mêmes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-8 rounded-xl">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-3">TechCorp Afrique</h3>
              <p className="text-blue-100 mb-4">
                +150% d'augmentation de la participation aux événements après l'adoption d'EventQuorum
              </p>
              <div className="text-sm text-blue-200">
                Conférences B2B • 2000+ participants
              </div>
            </div>

            <div className="bg-blue-800 p-8 rounded-xl">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">EduPlus</h3>
              <p className="text-blue-100 mb-4">
                +40% de taux de complétion des formations grâce aux outils interactifs
              </p>
              <div className="text-sm text-blue-200">
                Webinaires • 5000+ apprenants
              </div>
            </div>

            <div className="bg-blue-800 p-8 rounded-xl">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Global Services</h3>
              <p className="text-blue-100 mb-4">
                +60% d'augmentation des ventes de billets en 6 mois
              </p>
              <div className="text-sm text-blue-200">
                Salons professionnels • 10K+ visiteurs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Témoignages Vidéo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez en vidéo l'expérience de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="bg-blue-300 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-6xl">▶️</div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Sophie Kouassi</h3>
              <p className="text-sm text-gray-600">Comment EventQuorum a transformé nos conférences</p>
              <p className="text-xs text-blue-600 mt-2">3:45 min</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="bg-blue-300 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-6xl">▶️</div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Marc Diallo</h3>
              <p className="text-sm text-gray-600">Le streaming qui a changé notre summit tech</p>
              <p className="text-xs text-blue-600 mt-2">4:12 min</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="bg-blue-300 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-6xl">▶️</div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Aminata Traoré</h3>
              <p className="text-sm text-gray-600">Formation en ligne : +40% d'engagement</p>
              <p className="text-xs text-blue-600 mt-2">2:58 min</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Créez des événements mémorables avec EventQuorum
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Commencer Gratuitement
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

export default TemoignagesClients;