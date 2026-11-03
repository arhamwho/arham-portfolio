import FadeIn from './FadeIn';

const SERVICES = [
  {
    name: 'Full-Stack Web Apps',
    description:
      'End-to-end products -- from idea to deployment -- like learning management systems, tournament managers, and business platforms.',
  },
  {
    name: 'Frontend Development',
    description:
      'Responsive, interactive interfaces built with React, Next.js, TypeScript, and Tailwind CSS that feel smooth on every device.',
  },
  {
    name: 'Backend & APIs',
    description:
      'REST APIs, authentication, and role-based access with Node.js, FastAPI, PostgreSQL, MongoDB, Supabase, and Firebase.',
  },
  {
    name: 'Mobile Apps',
    description:
      'Cross-platform mobile apps with React Native, focused on clean layouts, intuitive navigation, and real-world usability.',
  },
  {
    name: 'AI-Powered Features',
    description:
      'Smart features like AI matching, recommendations, OCR, and career coaching using Gemini and OpenAI APIs.',
  },
];

const BORDER = '1px solid rgba(12, 12, 12, 0.15)';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.name}
            delay={i * 0.1}
            className="flex items-center gap-6 py-8 text-[#0C0C0C] sm:gap-10 sm:py-10 md:gap-14 md:py-12"
            style={{ borderTop: i === 0 ? BORDER : undefined, borderBottom: BORDER }}
          >
            <span
              className="shrink-0 font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
