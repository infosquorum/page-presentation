'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface QuiSommesNousProps {
    isLoaded: boolean;
}

export default function QuiSommesNous({
    isLoaded,
}: QuiSommesNousProps) {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isLoaded && typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });

            tl.fromTo(
                contentRef.current,
                {
                    x: -50,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                }
            ).fromTo(
                imageRef.current,
                {
                    x: 50,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '-=0.5'
            );
        }
    }, [isLoaded]);

    return (
        <section ref={sectionRef} className="mb-24">
            {/* Titre */}
            <div className="text-center mb-12">
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
                    À propos de FX_LABS
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Qui sommes-nous ?
                </h2>

                <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 ">
                {/* Texte */}
                <div ref={contentRef}>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                        <strong>FX_LABS</strong> est un collectif de développeurs,
                        concepteurs et passionnés de technologie engagés dans la création
                        de solutions numériques utiles à l'amélioration du quotidien des
                        populations en Côte d'Ivoire.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                        Aujourd'hui, notre équipe rassemble
                        <strong> 10 membres </strong>
                        qui collaborent sur plusieurs projets innovants dans les domaines
                        de la digitalisation, de l'événementiel et de la gestion
                        collaborative.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                        Parmi nos réalisations figure
                        <strong> QUORUMEVENT</strong>, une plateforme conçue pour simplifier
                        l'organisation d'événements professionnels et grand public, en
                        offrant aux organisateurs des outils modernes pour gérer leurs
                        participants, inscriptions, paiements, votes et interactions.
                    </p>

                    {/* Chiffres clés */}
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        <div className="bg-white shadow-md rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-indigo-600">10</div>
                            <div className="text-sm text-gray-600 mt-1">
                                Membres
                            </div>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-indigo-600">
                                5+
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                                Projets
                            </div>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-indigo-600">
                                100%
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                                Innovation
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div ref={imageRef} className="relative">
                    <Image
                        src="/assets/qui-sommes-nous.jpg"
                        alt="Équipe FX_LABS"
                        width={700}
                        height={500}
                        className="rounded-3xl shadow-2xl"
                    />

                    {/* <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-5 rounded-2xl shadow-xl">
                        <div className="text-2xl font-bold">FX_LABS</div>
                        <div className="text-sm opacity-90">
                            Construire les solutions numériques de demain
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}