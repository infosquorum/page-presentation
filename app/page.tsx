// app/page.tsx — Accueil
import HomeHero from "./components/home/HomeHero";
import ClientsMarquee from "./components/home/ClientsMarquee";
import FormatsShowcase from "./components/home/FormatsShowcase";
import Parcours from "./components/home/Parcours";
import JourJ from "./components/home/JourJ";
import FeaturesBento from "./components/home/FeaturesBento";
import UpcomingEvents from "./components/home/UpcomingEvents";
import AgProof from "./components/home/AgProof";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ClientsMarquee />
      <FormatsShowcase />
      <Parcours />
      <JourJ />
      <FeaturesBento />
      <UpcomingEvents />
      <AgProof />
    </main>
  );
}
