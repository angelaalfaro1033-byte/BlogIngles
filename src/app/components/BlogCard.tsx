import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Calendar } from 'lucide-react';
import type { Post } from '../data/posts';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-red-600/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-900/30 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        {/* Category */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
          <Calendar size={16} />
          <span>{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-red-500 transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 line-clamp-3">
          {post.shortDescription}
        </p>

        {/* Button */}
        <Link
          to={`/post/${post.slug}`}
          className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold group/btn"
        >
          <span>Read more</span>
          <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
        </Link>
      </div>
    </article>
  );
}
