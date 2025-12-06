import type { Skills as SkillsType } from '../types/portfolio';

interface SkillsProps {
  skills: SkillsType;
}

interface SkillCategoryProps {
  title: string;
  items: string[];
  color: string;
}

function SkillCategory({ title, items, color }: SkillCategoryProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className={`text-xl font-semibold mb-4 ${color}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Technical Skills</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <SkillCategory
            title="Languages"
            items={skills.languages}
            color="text-blue-700"
          />
          <SkillCategory
            title="Frameworks"
            items={skills.frameworks}
            color="text-green-700"
          />
          <SkillCategory
            title="Frontend"
            items={skills.frontend}
            color="text-purple-700"
          />
          <SkillCategory
            title="Databases"
            items={skills.databases}
            color="text-red-700"
          />
          <SkillCategory
            title="Cloud & DevOps"
            items={skills.cloud_devops}
            color="text-orange-700"
          />
          <SkillCategory
            title="Architecture & Tools"
            items={skills.architecture_tools}
            color="text-indigo-700"
          />
        </div>

        <div className="max-w-6xl mx-auto mt-6">
          <SkillCategory
            title="Soft Skills"
            items={skills.soft_skills}
            color="text-teal-700"
          />
        </div>
      </div>
    </section>
  );
}
