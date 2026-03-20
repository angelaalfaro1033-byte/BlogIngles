import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Calendar } from 'lucide-react';
import type { Post } from '../data/posts';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-200/50 transform hover:-translate-y-2">
      {/* Imagen */}
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        
        {/* Categoría */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Fecha */}
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
          <Calendar size={16} />
          <span>{post.date}</span>
        </div>

        {/* Título */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        {/* Descripción */}
        <p className="text-gray-600 mb-6 line-clamp-3">
          {post.shortDescription}
        </p>

        {/* Botón */}
        <Link
          to={`/post/${post.slug}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group/btn"
        >
          <span>Read more</span>
          <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
        </Link>
      </div>
    </article>
  );
}