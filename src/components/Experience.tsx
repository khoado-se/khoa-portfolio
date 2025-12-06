import type { Experience as ExperienceType } from '../types/portfolio';

interface ExperienceProps {
  experience: ExperienceType[];
}

interface ExperienceCardProps {
  item: ExperienceType;
}

function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-blue-600 last:pb-0">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-800">{item.role}</h3>
          <p className="text-lg text-blue-700 font-semibold">{item.company}</p>
          <p className="text-sm text-gray-500">{item.period}</p>
        </div>
        <p className="text-gray-700 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Experience</h2>

        <div className="max-w-3xl mx-auto">
          {experience.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
