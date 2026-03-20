import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToArticles = () => {
    const articlesSection = document.getElementById('articles-section');
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1569701813229-33284b643e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmVuZ2VycyUyMG1vdmllJTIwcG9zdGVyfGVufDF8fHx8MTc3Mzc5Njg1MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Avengers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-white">Everything about the </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-400 to-blue-500">
            Avengers universe
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          News, analysis and interesting facts about the most epic Marvel movies
        </p>

        <button
          onClick={scrollToArticles}
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
        >
          <span className="font-semibold">Explore articles</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>

      {/* Efecto de luz */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
      
      {/* Indicador de scroll */}
      <button
        onClick={scrollToArticles}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
}
