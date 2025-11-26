import React from 'react';
import Link from 'next/link';
import { 
  FiBriefcase, 
  FiMapPin, 
  FiClock, 
  FiUsers,
  FiTrendingUp,
  FiHeart,
  FiAward,
  FiGlobe,
  FiCode,
  FiBarChart2,
  FiHeadphones,
  FiSettings
} from 'react-icons/fi';

const Carriere = () => {
  const jobOffers = [
    {
      title: "Développeur Full-Stack Senior",
      department: "Technique",
      location: "Abidjan, Côte d'Ivoire",
      type: "CDI",
      experience: "5+ ans",
      icon: <FiCode className="w-8 h-8" />,
      description: "Nous recherchons un développeur passionné pour rejoindre notre équipe technique et participer au développement de notre plateforme.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      posted: "Il y a 2 jours"
    },
    {
      title: "Product Manager",
      department: "Produit",
      location: "Abidjan, Côte d'Ivoire",
      type: "CDI",
      experience: "3+ ans",
      icon: <FiBarChart2 className="w-8 h-8" />,
      description: "Pilotez la stratégie produit et travaillez avec nos équipes pour définir la roadmap d'EventQuorum.",
      skills: ["Product Strategy", "Agile", "Analytics", "UX/UI"],
      posted: "Il y a 5 jours"
    },
    {
      title: "Customer Success Manager",
      department: "Support Client",
      location: "Dakar, Sénégal",
      type: "CDI",
      experience: "2+ ans",
      icon: <FiHeadphones className="w-8 h-8" />,
      description: "Accompagnez nos clients dans leur réussite et assurez leur satisfaction au quotidien.",
      skills: ["Communication", "Empathie", "Problem Solving", "CRM"],
      posted: "Il y a 1 semaine"
    },
    {
      title: "Designer UI/UX",
      department: "Design",
      location: "Remote",
      type: "Freelance",
      experience: "3+ ans",
      icon: <FiSettings className="w-8 h-8" />,
      description: "Créez des expériences utilisateur exceptionnelles et des interfaces intuitives pour nos utilisateurs.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      posted: "Il y a 3 jours"
    },
    {
      title: "Business Developer",
      department: "Commercial",
      location: "Abidjan, Côte d'Ivoire",
      type: "CDI",
      experience: "3+ ans",
      icon: <FiTrendingUp className="w-8 h-8" />,
      description: "Développez notre portefeuille clients et identifiez de nouvelles opportunités de croissance.",
      skills: ["Vente B2B", "Négociation", "Prospection", "CRM"],
      posted: "Il y a 4 jours"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "CDI",
      experience: "4+ ans",
      icon: <FiGlobe className="w-8 h-8" />,
      description: "Gérez notre infrastructure cloud et assurez la disponibilité et les performances de la plateforme.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      posted: "Il y a 1 semaine"
    }
  ];

  const benefits = [
    {
      icon: <FiHeart className="w-12 h-12" />,
      title: "Équilibre Vie Pro/Perso",
      description: "Horaires flexibles et télétravail pour s'adapter à votre vie personnelle"
    },
    {
      icon: <FiTrendingUp className="w-12 h-12" />,
      title: "Évolution de Carrière",
      description: "Formations continues et opportunités d'évolution au sein de l'entreprise"
    },
    {
      icon: <FiUsers className="w-12 h-12" />,
      title: "Équipe Dynamique",
      description: "Travaillez avec une équipe passionnée et multiculturelle"
    },
    {
      icon: <FiAward className="w-12 h-12" />,
      title: "Rémunération Attractive",
      description: "Salaire compétitif et primes basées sur les performances"
    },
    {
      icon: <FiGlobe className="w-12 h-12" />,
      title: "Projets Innovants",
      description: "Participez à des projets à fort impact dans l'industrie des événements"
    },
    {
      icon: <FiBriefcase className="w-12 h-12" />,
      title: "Environnement Moderne",
      description: "Bureaux confortables et équipements de qualité professionnelle"
    }
  ];

  const values = [
    {
      emoji: "🚀",
      title: "Innovation",
      description: "Nous repoussons constamment les limites de ce qui est possible"
    },
    {
      emoji: "🤝",
      title: "Collaboration",
      description: "L'esprit d'équipe est au cœur de notre réussite"
    },
    {
      emoji: "🎯",
      title: "Excellence",
      description: "Nous visons toujours la plus haute qualité dans tout ce que nous faisons"
    },
    {
      emoji: "🌍",
      title: "Impact",
      description: "Nous créons des solutions qui transforment l'industrie des événements"
    }
  ];

  const departments = [
    { name: "Technique", count: 8, icon: "💻" },
    // { name: "Produit", count: 3, icon: "📊" },
    { name: "Commercial", count: 5, icon: "📈" },
    // { name: "Support", count: 4, icon: "🎧" },
    { name: "Marketing", count: 3, icon: "📱" },
    { name: "Design", count: 2, icon: "🎨" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white pb-15 pt-30 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
              <FiBriefcase className="w-10 h-10" />
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Rejoignez l'Aventure EventQuorum
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Construisez votre carrière dans une entreprise innovante qui révolutionne l'industrie des événements
            </p>
           
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Employés</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Nationalités</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Bureaux</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl text-center"
              >
                <div className="text-6xl mb-4">{value.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Avantages & Bénéfices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous prenons soin de nos talents avec des avantages exceptionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Départements
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez les différentes équipes qui composent EventQuorum
            </p>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-3">{dept.icon}</div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">
                  {dept.name}
                </h3>
                <p className="text-xs text-blue-600 font-semibold">
                  {dept.count} postes
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Offers Section */}
      <section id="postes" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Postes Ouverts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rejoignez notre équipe et participez à notre croissance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOffers.map((job, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-blue-600">
                    {job.icon}
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                    {job.posted}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-4">
                  {job.department}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {job.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FiMapPin className="w-4 h-4 mr-2 text-blue-600" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FiClock className="w-4 h-4 mr-2 text-blue-600" />
                    {job.type} • {job.experience}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
                  Postuler Maintenant
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre Processus de Recrutement
            </h2>
            <p className="text-blue-100 text-lg">
              Un parcours simple et transparent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Candidature</h3>
              <p className="text-blue-200 text-sm">
                Envoyez votre CV et lettre de motivation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Présélection</h3>
              <p className="text-blue-200 text-sm">
                Entretien téléphonique avec les RH
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Test Technique</h3>
              <p className="text-blue-200 text-sm">
                Évaluation de vos compétences
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Entretien Final</h3>
              <p className="text-blue-200 text-sm">
                Rencontre avec l'équipe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spontaneous Application Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Vous Ne Trouvez Pas le Poste Idéal ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Envoyez-nous une candidature spontanée, nous serons ravis d'étudier votre profil
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            Candidature Spontanée
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Faire la Différence ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez EventQuorum et contribuez à révolutionner l'industrie des événements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="DemoRequest">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Voir les Offres
              </button>
            </a>
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

export default Carriere;