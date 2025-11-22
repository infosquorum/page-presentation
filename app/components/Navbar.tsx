// components/Navbar.jsx
"use client";

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

// Configuration externalisée
const NAVBAR_CONFIG = {
  scrollThreshold: 10,
  menuCloseDelay: 280,
  animationDuration: 1,
  animationDelay: 0.3,
};

const COLORS = {
  primary: 'blue-600',
  primaryHover: 'blue-700',
  background: {
    light: 'white',
    dark: 'gray-900',
    dropdown: 'f5fdff',
    dropdownDark: 'gray-800',
  }
};

// Données externalisées
const eventTypes = [
  {
    id: 1,
    title: "Conventions",
    link: "/Prestation/conventions",
  },
  {
    id: 2,
    title: "Conférences",
    link: "/Prestation/conferences",
  },
  {
    id: 3,
    title: "Cérémonies et remises de prix",
    link: "/Prestation/ceremonies-et-remises-de-prix",
  },
  {
    id: 4,
    title: "Forums de recrutement et job datings",
    link: "/Prestation/forums",
  },
  {
    id: 5,
    title: "Assemblées générales",
    link: "/Prestation/assemblees-generales",
  },
  {
    id: 6,
    title: "Séminaires et Team Building",
    link: "/Prestation/seminaires",
  },
  {
    id: 7,
    title: "Soirées d'entreprises",
    link: "/Prestation/soirees-entreprises",
  },
];

// Hook personnalisé pour le throttling du scroll
function useThrottledScroll(callback, delay = 16) {
  const throttleRef = useRef();
  
  useEffect(() => {
    const handleScroll = () => {
      if (throttleRef.current) return;
      
      throttleRef.current = setTimeout(() => {
        callback();
        throttleRef.current = null;
      }, delay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
    };
  }, [callback, delay]);
}

export default function Navbar() {
  // États séparés pour desktop et mobile
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopPrestationsOpen, setIsDesktopPrestationsOpen] = useState(false);
  const [isMobilePrestationsOpen, setIsMobilePrestationsOpen] = useState(false);

  // Refs pour les animations
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const timeoutRef = useRef(null);

  // Gestion du scroll avec throttling
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > NAVBAR_CONFIG.scrollThreshold);
  }, []);

  useThrottledScroll(handleScroll);

  // Animations GSAP
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    
    tl.from([logoRef.current, titleRef.current], {
      opacity: 0,
      x: -30,
      duration: NAVBAR_CONFIG.animationDuration,
      delay: NAVBAR_CONFIG.animationDelay,
      stagger: 0.1
    })
    .from(ctaButtonRef.current, {
      opacity: 0,
      x: 30,
      duration: NAVBAR_CONFIG.animationDuration,
    }, "-=0.8");
  }, []);

  // Gestion du menu déroulant desktop
  const handleDesktopMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDesktopPrestationsOpen(true);
  }, []);

  const handleDesktopMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsDesktopPrestationsOpen(false);
    }, NAVBAR_CONFIG.menuCloseDelay);
  }, []);

  // Fermeture immédiate du menu lors du clic sur un lien
  const handlePrestationLinkClick = useCallback(() => {
    setIsDesktopPrestationsOpen(false);
    setIsMobilePrestationsOpen(false);
    setIsMobileMenuOpen(false); // Ferme aussi le menu mobile si ouvert
    
    // Nettoie le timeout si il existe
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Gestion des touches clavier pour l'accessibilité
  const handleKeyDown = useCallback((event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
    if (event.key === 'Escape') {
      setIsDesktopPrestationsOpen(false);
      setIsMobilePrestationsOpen(false);
      setIsMobileMenuOpen(false);
    }
  }, []);

  // Nettoyage des timeouts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Fermeture du menu mobile lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
        setIsMobilePrestationsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Classes CSS optimisées
  const navbarClasses = `
    fixed w-full z-50 transition-all duration-300
    ${isScrolled 
      ? `dark:bg-${COLORS.background.dark} bg-${COLORS.background.light} shadow-md py-2` 
      : 'bg-transparent py-3'
    }
  `.trim();

  const linkClasses = "text-gray-900 dark:text-white hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none";

  return (
    <nav className={navbarClasses} role="navigation" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md">
              <div 
                ref={logoRef} 
                className={`h-8 w-8 bg-${COLORS.primary} rounded-full mr-2`}
                aria-hidden="true"
              />
              <span 
                ref={titleRef} 
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                EventQuorum
              </span>
            </Link>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className={linkClasses}>
              Accueil
            </Link>

            {/* Menu Prestations Desktop */}
            <div
              className="relative"
              onMouseEnter={handleDesktopMouseEnter}
              onMouseLeave={handleDesktopMouseLeave}
            >
              <button
                className={`${linkClasses} flex items-center`}
                onKeyDown={(e) => handleKeyDown(e, () => setIsDesktopPrestationsOpen(!isDesktopPrestationsOpen))}
                aria-expanded={isDesktopPrestationsOpen}
                aria-haspopup="true"
                aria-label="Menu Prestations"
              >
                Prestations
                <svg
                  className={`w-3 h-3 ml-1 transition-transform duration-300 ${
                    isDesktopPrestationsOpen ? 'rotate-180 text-blue-600' : 'text-gray-500'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Zone tampon pour améliorer l'UX */}
              <div className="absolute left-1/2 -translate-x-[55%] w-[6vw] h-2.5 z-10" />

              {/* Menu déroulant */}
              <div 
                className={`
                  absolute left-1/2 z-20 mt-2 w-[70vw] bg-[#${COLORS.background.dropdown}] 
                  dark:bg-${COLORS.background.dropdownDark} dark:border-${COLORS.background.dropdownDark} 
                  rounded-xl shadow-xl border border-gray-200 flex transition-all duration-450 ease-out transform
                  ${isDesktopPrestationsOpen
                    ? 'opacity-100 translate-x-[-45%] scale-100 translate-y-0 visible'
                    : 'opacity-0 scale-95 translate-x-[-45%] translate-y-4 pointer-events-none invisible'
                  }
                `}
                role="menu"
                aria-labelledby="prestations-menu"
              >
                {/* Liens */}
                <div className="w-[60%] grid grid-cols-2 gap-6 p-6">
                  {eventTypes.map((type) => (
                    <Link
                      key={type.id}
                      href={type.link}
                      onClick={handlePrestationLinkClick}
                      className="block text-sm text-gray-700 dark:text-white hover:text-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2"
                      role="menuitem"
                    >
                      {type.title}
                    </Link>
                  ))}
                </div>

                {/* Image */}
                <div className="w-[40%] flex items-center justify-center p-6 border-l border-gray-200">
                  <div className="w-[60%] h-[200px] bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                    <img
                      src="/presentation-menu1.avif"
                      alt="Illustration des prestations EventQuorum"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Link href="/Explorer/" className={linkClasses}>
              Explorer
            </Link>
            <Link href="/Quinoussommes/" className={linkClasses}>
              Qui sommes-nous ?
            </Link>
          </div>

          {/* Bouton CTA */}
          <div className="hidden md:flex">
            <Link 
              ref={ctaButtonRef} 
              href="/DemoRequest" 
              className={`bg-${COLORS.primary} hover:bg-${COLORS.primaryHover} text-white px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              Demander une démo
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onKeyDown={(e) => handleKeyDown(e, () => setIsMobileMenuOpen(!isMobileMenuOpen))}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-gray-900 dark:hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Menu de navigation mobile"
            >
              <svg 
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div 
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-${COLORS.background.light} dark:bg-${COLORS.background.dropdownDark} shadow-lg`}
        role="menu"
        aria-label="Menu de navigation mobile"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/" 
            className="block text-gray-900 dark:text-white hover:bg-gray-100 px-3 py-2 dark:hover:bg-gray-700 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            role="menuitem"
          >
            Accueil
          </Link>
          
          {/* Menu Prestations Mobile */}
          <div className="relative">
            <button
              onClick={() => setIsMobilePrestationsOpen(!isMobilePrestationsOpen)}
              onKeyDown={(e) => handleKeyDown(e, () => setIsMobilePrestationsOpen(!isMobilePrestationsOpen))}
              className="w-full flex justify-between items-center px-3 py-2 text-gray-800 dark:text-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              aria-expanded={isMobilePrestationsOpen}
              aria-haspopup="true"
            >
              Prestations
              <svg 
                className={`w-3 h-3 transition-transform duration-200 ${
                  isMobilePrestationsOpen ? 'rotate-180 text-blue-600' : 'text-gray-500'
                }`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMobilePrestationsOpen && (
              <div className="pl-4 space-y-1">
                {eventTypes.map((type) => (
                  <Link
                    key={type.id}
                    href={type.link}
                    onClick={handlePrestationLinkClick}
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                    role="menuitem"
                  >
                    {type.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/Explorer/" 
            className="block text-gray-900 dark:text-white hover:bg-gray-100 px-3 dark:hover:bg-gray-700 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            role="menuitem"
          >
            Explorer
          </Link>
          <Link 
            href="/Quinoussommes/" 
            className="block text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            role="menuitem"
          >
            Qui sommes-nous ?
          </Link>
          <Link 
            href="/DemoRequest" 
            className={`block bg-${COLORS.primary} text-white hover:bg-${COLORS.primaryHover} px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            role="menuitem"
          >
            Demander une démo
          </Link>
        </div>
      </div>
    </nav>
  );
}