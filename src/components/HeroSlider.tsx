"use client";

import { useState, useEffect, useCallback } from "react";

interface Slide {
  image: string;
  headline: string;
  subline?: string;
  credit: string;
}

// Image sources (all royalty-free):
// - Unsplash: https://unsplash.com/license (free for commercial use, no attribution required)
// - Images selected to clearly show amateur radio equipment and activities
const slides: Slide[] = [
  {
    // Radio equipment close-up by Sven Verweij on Unsplash
    image: "https://images.unsplash.com/photo-1633591324263-6d9536f80599?w=1920&q=80",
    headline: "Amateurfunk – Kommunikation ohne Grenzen",
    subline: "Unabhängig, experimentell, weltweit.",
    credit: "Foto: Sven Verweij / Unsplash",
  },
  {
    // Radio telescope / antenna by Stephan Widua on Unsplash
    image: "https://images.unsplash.com/photo-1610457642191-05328cdf34ff?w=1920&q=80",
    headline: "Funk, wo andere kein Netz haben",
    subline: "Vom Feld, vom Berg oder aus der Clubstation.",
    credit: "Foto: Stephan Widua / Unsplash",
  },
  {
    // Radio communication equipment by Jorge Ramirez on Unsplash
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920&q=80",
    headline: "Ein Hobby, das Menschen verbindet",
    subline: "Lokaler Club – globale Reichweite.",
    credit: "Foto: Jorge Ramirez / Unsplash",
  },
  {
    // Electronic equipment / radio by Louis Reed on Unsplash
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
    headline: "Lernen durch Ausprobieren",
    subline: "Antennen, Digitalmodi, Portabelbetrieb, Experimente.",
    credit: "Foto: Louis Reed / Unsplash",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy/60" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.headline}
              </h2>
              {slide.subline && (
                <p className="text-xl md:text-2xl text-cream/90 drop-shadow-md">
                  {slide.subline}
                </p>
              )}
            </div>
          </div>

          {/* Photo Credit */}
          <div className="absolute bottom-2 right-2 text-xs text-white/60">
            {slide.credit}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        aria-label="Vorheriges Bild"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        aria-label="Nächstes Bild"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Zu Slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}
