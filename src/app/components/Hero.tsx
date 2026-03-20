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
    <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50 to-white">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1672385245363-f4e7ed05a63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwcHJvZ3JhbW1pbmclMjBsYXB0b3B8ZW58MXx8fHwxNzczOTczNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Ingeniería de Sistemas"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-gray-900">Blog </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-blue-500">
            Systems Engineering
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Explore the world of technology: web development, AI, cybersecurity, and cloud computing
        </p>

        <button
          onClick={scrollToArticles}
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          <span className="font-semibold">Explore articles</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>

      {/* Efecto de luz */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      {/* Indicador de scroll */}
      <button
        onClick={scrollToArticles}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-500 hover:text-blue-600 transition-colors animate-bounce"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
}