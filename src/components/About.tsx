import type { About as AboutType, Goals, Education, Background } from '../types/portfolio';

interface AboutProps {
  about: AboutType;
  goals: Goals;
  education: Education;
  background: Background;
}

export default function About({ about, goals, education, background }: AboutProps) {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {about.long}
            </p>
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Background</h3>
              <p className="text-gray-600">From: {background.from}</p>
              <p className="text-gray-600">{background.current_region}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Education</h3>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-xl font-semibold text-gray-800">{education.degree}</h4>
              <p className="text-gray-700">{education.school}</p>
              <p className="text-gray-600">{education.location}</p>
              <p className="text-gray-600">Graduation: {education.graduation_year}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Career Goals</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Short-term</h4>
                <p className="text-gray-700">{goals.career_short_term}</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Long-term</h4>
                <p className="text-gray-700">{goals.career_long_term}</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">English Learning</h4>
                <p className="text-gray-700">{goals.english_learning}</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Future Plan</h4>
                <p className="text-gray-700">{goals.future_plan}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
