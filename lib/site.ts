// lib/site.ts — contenu et navigation du site vitrine

export const CONTACT = {
  phone: "+225 01 41 95 03 52",
  phoneHref: "tel:+2250141950352",
  email: "info@quorumenligne.com",
  address: ["Rivera 2 / Dabali Express, Cocody", "Abidjan, Côte d’Ivoire"],
};

// Espace actionnaires (plateforme AG existante). À définir dans les variables du dépôt.
export const SHAREHOLDER_SPACE_URL = process.env.NEXT_PUBLIC_SHAREHOLDER_SPACE_URL || "";

const v = (name: string) => `/images/vitrine/${name}.jpg`;

export const IMAGES = {
  stage: v("stage"), assembly: v("assembly"), sgci: v("sgci"), sucrivoire: v("sucrivoire"), saph: v("saph"),
  auditorium: v("auditorium"), audience: v("audience"), phones: v("phones"), crowd: v("crowd"), orange: v("orange"),
  gala: v("gala"), convention: v("convention"), seminaire: v("seminaire"), forum: v("forum"),
  conference: v("conference"), team: v("team"), phoneapp: v("phoneapp"), fireworks: v("fireworks"),
};

export type ServiceId = "billetterie" | "acces" | "interactions" | "retransmission" | "statistiques" | "site";
export type FormatId = "conferences" | "ceremonies" | "seminaires" | "forums" | "conventions" | "soirees";

export const ROUTES = {
  home: "/",
  ag: "/assemblees-generales",
  prestations: "/prestations",
  plateforme: "/plateforme",
  evenements: "/evenements",
  apropos: "/a-propos",
  faq: "/faq",
  demo: "/DemoRequest",
};

export const SERVICES: { id: ServiceId; title: string; short: string; desc: string }[] = [
  { id: "billetterie", title: "Billetterie et paiements", short: "Billetterie", desc: "Orange Money, MTN, Moov, Wave" },
  { id: "acces", title: "Inscriptions et accès", short: "Accès", desc: "Formulaires, badges, scan à l’entrée" },
  { id: "interactions", title: "Votes et interactions live", short: "Interactions", desc: "Votes, questions et sondages en direct" },
  { id: "retransmission", title: "Retransmission en direct", short: "Retransmission", desc: "Diffusion de vos sessions en ligne" },
  { id: "statistiques", title: "Statistiques en temps réel", short: "Statistiques", desc: "Arrivées, ventes, participation" },
  { id: "site", title: "Site de l’événement", short: "Site de l’événement", desc: "Votre site d’événement à vos couleurs" },
];

export const FORMATS: {
  id: FormatId; title: string; short: string; desc: string; image: string;
  headline: string; intro: string; points: string[]; modules: ServiceId[];
}[] = [
  { id: "conferences", title: "Conférences", short: "Conférences", desc: "Keynotes, panels, intervenants en ligne", image: IMAGES.conference,
    headline: "Des conférences qui inspirent et rassemblent.",
    intro: "Conférence, colloque ou cause à défendre : programme, intervenants, public dans la salle et en ligne.",
    points: ["Programme, sessions et intervenants publiés en ligne", "Billetterie et badges envoyés sur le téléphone", "Questions et sondages du public en direct", "Retransmission pour le public à distance"],
    modules: ["billetterie", "acces", "interactions", "retransmission"] },
  { id: "ceremonies", title: "Cérémonies et remises de prix", short: "Cérémonies", desc: "Votes du public, palmarès en direct", image: IMAGES.gala,
    headline: "Des cérémonies dont on se souvient.",
    intro: "Remises de prix, galas, lancements : l’accueil est soigné, le palmarès se joue en direct.",
    points: ["Invitations nominatives et placement à table", "Accueil VIP par scan à l’entrée", "Vote du public et palmarès affiché en salle", "Photos de la soirée partagées après l’événement"],
    modules: ["billetterie", "acces", "interactions", "site"] },
  { id: "seminaires", title: "Séminaires", short: "Séminaires", desc: "Ateliers, sessions en petits groupes", image: IMAGES.seminaire,
    headline: "Des séminaires qui font avancer vos équipes.",
    intro: "Séminaires d’entreprise, formations, ateliers : chacun choisit ses sessions, vous suivez la participation.",
    points: ["Choix des ateliers dès l’inscription", "Places limitées par atelier, mises à jour en direct", "Présences enregistrées automatiquement", "Bilan de participation par session"],
    modules: ["acces", "statistiques", "site"] },
  { id: "forums", title: "Forums et salons", short: "Forums et salons", desc: "Exposants, rendez-vous, networking", image: IMAGES.forum,
    headline: "Des forums où chaque rencontre compte.",
    intro: "Forums emploi, salons professionnels : visiteurs, exposants et partenaires au même endroit.",
    points: ["Inscription des visiteurs et des exposants", "Partenaires et sponsors mis en avant sur le site", "Programme des conférences du forum", "Fréquentation suivie heure par heure"],
    modules: ["acces", "site", "statistiques"] },
  { id: "conventions", title: "Conventions", short: "Conventions", desc: "Grands volumes, plusieurs salles", image: IMAGES.convention,
    headline: "Des conventions à grande échelle, sans files d’attente.",
    intro: "Des milliers de participants, plusieurs salles, plusieurs entrées : un seul tableau de bord.",
    points: ["Plusieurs entrées scannées en parallèle", "Plusieurs salles et sessions simultanées", "Billetterie par catégorie de participants", "Retransmission des plénières"],
    modules: ["billetterie", "acces", "statistiques", "retransmission"] },
  { id: "soirees", title: "Soirées d’entreprise", short: "Soirées d’entreprise", desc: "Invitations, accueil, animations", image: IMAGES.fireworks,
    headline: "Des soirées d’entreprise réussies.",
    intro: "Fêtes de fin d’année, anniversaires d’entreprise, soirées clients : invitations, accueil et animations.",
    points: ["Invitations envoyées et réponses suivies", "Contrôle à l’entrée sans liste papier", "Animations interactives : votes, quiz", "Souvenirs partagés après la soirée"],
    modules: ["acces", "interactions", "site"] },
];

export const serviceTitle = (id: ServiceId) => SERVICES.find((s) => s.id === id)!.short;
export const formatTitle = (id: FormatId) => FORMATS.find((f) => f.id === id)!.short;

// Références AG (événements réels accompagnés)
export const AG_REFERENCES = [
  { client: "Société Générale de Côte d’Ivoire", label: "de la Société Générale de Côte d’Ivoire", date: "27–28 novembre 2024", image: IMAGES.sgci },
  { client: "Orange CI", label: "d’Orange CI", date: "10 avril 2025", image: IMAGES.orange },
  { client: "SAPH", label: "de SAPH", date: "8 avril 2025", image: IMAGES.saph },
  { client: "Sucrivoire", label: "de Sucrivoire", date: "août 2024", image: IMAGES.sucrivoire },
  { client: "Nestlé Côte d’Ivoire", label: "de Nestlé Côte d’Ivoire", date: "5–6 juin 2024", image: IMAGES.assembly },
];

// Bandeau « Ils nous font confiance » — à valider avant mise en ligne
export const CLIENTS = ["Société Générale CI", "Orange CI", "Nestlé", "SAPH", "Sucrivoire", "NSIA Banque", "PALMCI", "Unilever"];

// Animations Lottie : déposez les fichiers .lottie dans public/lottie/ et renseignez leur chemin.
// Tant qu'un chemin est vide, une animation CSS de remplacement s'affiche.
export const LOTTIE = {
  confetti: "", // ex. "/lottie/confetti.lottie"
  badge: "",    // ex. "/lottie/qr-scan.lottie"
};
