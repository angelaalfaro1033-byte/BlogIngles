import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Página no encontrada</h2>
        <p className="text-gray-400 mb-8">Esta página no existe en el universo Avengers</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <Home size={20} />
          <span>Volver al inicio</span>
        </Link>
      </div>
    </div>
  );
}
