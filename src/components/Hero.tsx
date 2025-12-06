import type { Meta } from '../types/portfolio';

interface HeroProps {
  meta: Meta;
}

export default function Hero({ meta }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          {meta.name}
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-blue-100">
          {meta.title}
        </p>
        <p className="text-lg mb-8 text-blue-200">
          {meta.location}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            GitHub
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${meta.email}`}
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
