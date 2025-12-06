import type { Contact as ContactType } from '../types/portfolio';

interface ContactProps {
  contact: ContactType;
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl p-8 mb-8">
            <p className="text-xl text-center mb-8 text-blue-100">
              {contact.message}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href={`mailto:${contact.email}`}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-6 text-center transition-all hover:scale-105"
              >
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-blue-100 break-all">{contact.email}</p>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-6 text-center transition-all hover:scale-105"
              >
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-blue-100">View my code</p>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-6 text-center transition-all hover:scale-105"
              >
                <div className="text-3xl mb-3">👔</div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-blue-100">Connect with me</p>
              </a>
            </div>
          </div>

          <footer className="text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Do Dang Khoa. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
