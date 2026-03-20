import { BlogCard } from './BlogCard';
import { posts } from '../data/posts';

export function BlogGrid() {
  return (
    <section id="articles-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Título de sección */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Latest <span className="text-red-600">Posts</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-400 mx-auto"></div>
      </div>

      {/* Grid de artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
