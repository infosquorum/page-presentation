#!/usr/bin/env bash
# Supprime les composants de l'ancienne page d'accueil et de l'ancienne navigation,
# remplacés par app/components/site/* et app/components/home/*.
# À lancer une fois depuis la racine du dépôt, après avoir vérifié le build.
set -euo pipefail
git rm -q --ignore-unmatch \
  app/components/Hero.tsx app/components/EventsSection.tsx app/components/EventCarousel.tsx \
  app/components/FeaturedCategories.tsx app/components/Fonctionnalite.tsx app/components/Invitation.tsx \
  app/components/PartenersSection.tsx app/components/Navbar.tsx app/components/Footer.tsx app/components/ScrollToTop.tsx \
  app/components/Navbar/DropdownMenu.tsx app/components/Navbar/MobileMenu.tsx app/components/Navbar/NavItem.tsx app/components/Navbar/Navbar.tsx \
  app/components/home/AmbianceEtUne.tsx app/components/home/CtaFinal.tsx app/components/home/NosEvenements.tsx \
  app/components/home/NousYEtions.tsx app/components/home/RolesSection.tsx app/components/home/TempsForts.tsx \
  app/components/home/UpcomingTicker.tsx app/components/home/format.ts
echo "Anciens composants supprimés. Lancez 'npm run build' pour vérifier."
