import { MessageSquare } from 'lucide-react';
import DisqusComments from '../components/DisqusComments';

export function Comments() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 border border-gray-800">

        <div className="flex items-center gap-3 mb-8">
          <MessageSquare className="text-red-600" size={28} />
          <h3 className="text-3xl font-bold text-white">
            Comentarios
          </h3>
        </div>

        <DisqusComments
          identifier="post-endgame"
          url={window.location.href}
        />

      </div>
    </section>
  );
}