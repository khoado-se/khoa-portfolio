import type { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{project.year}</span>
        </div>
        <p className="text-blue-100 mb-2">{project.short}</p>
        <p className="text-sm text-blue-200">{project.role}</p>
      </div>

      <div className="p-6">
        <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

        {project.features && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-600 text-sm">{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t">
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              View Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors text-sm font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Projects</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
