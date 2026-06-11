import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EventCarousel = () => {
  const events = [
    { id: 1, title: "Conférence Annuelle 2024", description: "...", image: "/event1.avif" },
    { id: 2, title: "Séminaire Tech Innovation", description: "...", image: "/even3.jpg" },
    { id: 3, title: "Gala de Charité", description: "...", image: "/even4.jpg" },
    { id: 4, title: "Hackathon 2024", description: "...", image: "/even6.jpg" },
    { id: 5, title: "Forum des Métiers", description: "...", image: "/even7.jpg" },
    { id: 6, title: "Workshop Design Thinking", description: "...", image: "/even5.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // ✅ null = pas encore calculé (évite le layout shift)
  const [slideWidth, setSlideWidth] = useState<number | null>(null);
  const titleref = useRef(null);
  const introref = useRef(null);
  const carouselRef = useRef(null);

  // ✅ Calcul de la largeur uniquement côté client
  useEffect(() => {
    const computeSlideWidth = () => {
      if (window.innerWidth < 640) return 100;
      if (window.innerWidth < 1024) return 50;
      return 33.33;
    };

    setSlideWidth(computeSlideWidth());

    const handleResize = () => setSlideWidth(computeSlideWidth());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [events.length]);

  // Animation GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(titleref.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 })
      .fromTo(introref.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=0.4");

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="w-full py-12 px-4 my-10 bg-gray-50 rounded-lg">
      {/* En-tête */}
      <div className="text-center mb-8">
        <h2 ref={titleref} className="text-3xl dark:text-gray-900 font-bold mb-4">
          Nos Événements{' '}
          <span className="bg-gradient-to-r from-green-600 via-yellow-600 to-yellow-500 text-transparent bg-clip-text">
            Réussis
          </span>
        </h2>
        <p ref={introref} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez les événements marquants que nous avons organisés avec succès
        </p>
      </div>

      {/* ✅ Carrousel rendu seulement quand slideWidth est connu */}
      {slideWidth !== null && (
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-700 ease-in-out gap-5"
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
          >
            {[...events, ...events, ...events].map((event, index) => (
              <div
                key={`${event.id}-${Math.floor(index / events.length)}`}
                className="flex-shrink-0 px-2"
                style={{ minWidth: `${slideWidth}%` }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default EventCarousel;