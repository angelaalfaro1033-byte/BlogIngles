import { useParams, Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Comments } from '../components/Comments';
import { posts } from '../data/posts';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

export function PostDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <Link to="/" className="text-red-500 hover:text-red-400">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Botón volver */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Volver al inicio</span>
        </Link>
      </div>

      {/* Imagen principal */}
      <div className="relative h-[400px] md:h-[500px] mb-12">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Título superpuesto */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-full">
                <Tag size={16} />
                {post.category}
              </span>
              <span className="flex items-center gap-2 text-gray-300">
                <Calendar size={16} />
                {post.date}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Contenido del artículo */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 md:p-12 border border-gray-800 shadow-2xl mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            {post.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Sección de comentarios */}
  <Comments postSlug={post.slug} />
      {/* Artículos relacionados */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <h3 className="text-3xl font-bold text-white mb-8">
          Artículos <span className="text-red-600">relacionados</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts
            .filter((p) => p.id !== post.id)
            .slice(0, 3)
            .map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/post/${relatedPost.slug}`}
                className="group block bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden border border-gray-800 hover:border-red-600/50 transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <ImageWithFallback
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold line-clamp-2 group-hover:text-red-500 transition-colors">
                    {relatedPost.title}
                  </h4>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
