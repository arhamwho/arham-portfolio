import { ArrowLeft, Camera, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import useFitText from '../hooks/useFitText';
import profilePhoto from '../assets/arham-2.png';

const PROFILE_PHOTO: string | null = profilePhoto;

const BASE = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

const INTRO =
  "I'm Arham, a Computer Science student, full stack developer, and builder who enjoys turning ideas into real-world products. From full-stack web applications to mobile apps and AI-powered features, I'm always exploring new technologies and finding smarter ways to solve problems. I believe in learning by building, and creating software that's not just functional, but actually useful.";

const FACTS = [
  { label: 'Based in', value: 'Mumbai, India' },
  { label: 'Role', value: 'Full Stack Developer' },
  { label: 'Studying', value: 'B.Tech CSE · ITM Skills University' },
  { label: 'Availability', value: 'Open for projects' },
];

const STATS = [
  { value: '2+', label: 'Years of experience' },
  { value: '10+', label: 'Projects built' },
  { value: '2', label: 'Companies worked with' },
];

const EXPERIENCE = [
  {
    period: '08/2025 — Now',
    role: 'Full Stack Developer',
    place: 'Global Solutions America',
    points: [
      'Contributed to software development tasks and project implementation using modern web technologies.',
      'Worked on application features, debugging, and improving user interface functionality.',
      'Collaborated on technical requirements and development tasks to support project delivery.',
    ],
  },
  {
    period: '11/2024 — 06/2025',
    role: 'Web Developer',
    place: 'Al Maiaar Al Zahabi',
    points: [
      'Developed a real estate management platform to support property operations and information management.',
      'Built user interfaces for managing property information and presenting real estate data.',
      'Worked on responsive layouts, functionality, and usability for day-to-day property management.',
    ],
  },
];

const EDUCATION = [
  {
    period: '2024 — 2028',
    role: 'B.Tech in Computer Science & Engineering',
    place: 'ITM Skills University',
    points: [],
  },
  {
    period: '2022 — 2024',
    role: 'Class XI–XII (Integrated)',
    place: 'Al Irfan Residential School',
    points: [],
  },
  {
    period: '2012 — 2022',
    role: 'Class I–X',
    place: 'N.H. English Academy',
    points: [],
  },
];

const SKILLS = [
  { group: 'Languages', items: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'] },
  { group: 'Frontend', items: ['React.js', 'Next.js', 'React Native', 'HTML', 'CSS', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'FastAPI'] },
  { group: 'Databases', items: ['SQL', 'PostgreSQL', 'MongoDB', 'Supabase'] },
  { group: 'AI / ML', items: ['OCR', 'Recommendation Systems', 'Matching Systems', 'Gemini / OpenAI APIs'] },
  { group: 'Tools', items: ['GitHub', 'VS Code', 'Figma', 'Streamlit', 'Vercel'] },
  { group: 'Testing', items: ['Manual Testing', 'Regression Testing'] },
];

const SPOKEN_LANGUAGES = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'German', level: 'Elementary' },
];

interface TimelineItem {
  period: string;
  role: string;
  place: string;
  points: string[];
}

const DIVIDER = '1px solid rgba(12, 12, 12, 0.15)';

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="mx-auto max-w-5xl">
      {items.map((item, i) => (
        <FadeIn
          key={item.role}
          delay={i * 0.1}
          className="grid gap-3 py-8 text-[#0C0C0C] sm:grid-cols-[1fr_2fr] sm:gap-10 sm:py-10 md:py-12"
          style={{ borderTop: i === 0 ? DIVIDER : undefined, borderBottom: DIVIDER }}
        >
          <span className="font-black uppercase leading-none" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2rem)' }}>
            {item.period}
          </span>
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
              {item.role}
            </h3>
            <span className="font-light uppercase tracking-widest opacity-50" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}>
              {item.place}
            </span>
            {item.points.length > 0 && (
              <ul
                className="mt-2 flex max-w-2xl list-disc flex-col gap-1.5 pl-5 font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)', opacity: 0.6 }}
              >
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function PhotoFrame() {
  return (
    <div className={`relative aspect-[4/5] w-full overflow-hidden border-2 border-[#D7E2EA] p-3 sm:p-4 ${RADIUS}`}>
      {PROFILE_PHOTO ? (
        <img
          src={PROFILE_PHOTO}
          alt="Arham"
          className="h-full w-full rounded-[30px] object-cover sm:rounded-[38px] md:rounded-[46px]"
          style={{ objectPosition: '45% 50%' }}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-[30px] border-2 border-dashed border-[#D7E2EA]/30 text-[#D7E2EA]/60 sm:rounded-[38px] md:rounded-[46px]">
          <Camera size={48} strokeWidth={1.25} />
          <span className="text-xs font-light uppercase tracking-widest sm:text-sm">Your photo here</span>
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  const { containerRef, textRef, fontSize } = useFitText();

  return (
    <>
      <section className="relative pb-20 sm:pb-28" style={{ overflowX: 'clip' }}>
        <FadeIn delay={0} y={-20} className="px-6 pt-6 md:px-10 md:pt-8">
          <Link
            to="/#about"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3 sm:text-sm"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </FadeIn>

        <div ref={containerRef} className="overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading mt-6 w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight sm:mt-8 md:mt-10"
          >
            <span ref={textRef} className="inline-block text-[16vw]" style={fontSize ? { fontSize } : undefined}>
              My story
            </span>
          </FadeIn>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-6xl items-center gap-12 px-5 sm:mt-16 sm:px-8 md:mt-20 md:grid-cols-[5fr_6fr] md:gap-16 md:px-10">
          <FadeIn delay={0.3} y={40} className="relative mx-auto w-full max-w-[460px]">
            <FadeIn
              as="img"
              src={`${BASE}/moon_icon.11395d36.png`}
              alt=""
              delay={0.6}
              x={-60}
              y={0}
              duration={0.9}
              className="pointer-events-none absolute -left-8 -top-10 z-10 w-[90px] sm:-left-14 sm:w-[120px] md:w-[140px]"
            />
            <FadeIn
              as="img"
              src={`${BASE}/Group_134-1.2e04f3ce.png`}
              alt=""
              delay={0.7}
              x={60}
              y={0}
              duration={0.9}
              className="pointer-events-none absolute -bottom-10 -right-6 z-10 w-[100px] sm:-right-12 sm:w-[130px] md:w-[160px]"
            />
            <PhotoFrame />
          </FadeIn>

          <div className="flex flex-col gap-10">
            <AnimatedText
              text={INTRO}
              className="font-medium leading-relaxed text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.05rem, 2vw, 1.5rem)' }}
            />
            <div>
              {FACTS.map((fact, i) => (
                <FadeIn
                  key={fact.label}
                  delay={i * 0.1}
                  y={20}
                  className="flex items-center justify-between gap-4 py-4 text-[#D7E2EA]"
                  style={{ borderBottom: '1px solid rgba(215, 226, 234, 0.15)' }}
                >
                  <span className="text-xs font-light uppercase tracking-widest opacity-60 sm:text-sm">
                    {fact.label}
                  </span>
                  <span className="flex items-center gap-2 text-right font-medium uppercase" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>
                    {fact.label === 'Based in' && <MapPin size={16} />}
                    {fact.value}
                  </span>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.4} y={20}>
              <ContactButton />
            </FadeIn>
          </div>
        </div>

        <div className="mx-auto mt-24 grid max-w-6xl gap-10 px-5 sm:mt-32 sm:grid-cols-3 sm:px-8 md:px-10">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} className="flex flex-col items-center gap-2 text-center">
              <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3.5rem, 9vw, 130px)' }}>
                {stat.value}
              </span>
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {stat.label}
              </span>
            </FadeIn>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="rounded-t-[40px] px-5 pb-32 pt-20 sm:rounded-t-[50px] sm:px-8 sm:pb-36 sm:pt-24 md:rounded-t-[60px] md:px-10 md:pb-44 md:pt-32"
        style={{ background: '#FFFFFF' }}
      >
        <FadeIn
          as="h2"
          y={40}
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </FadeIn>
        <Timeline items={EXPERIENCE} />

        <FadeIn
          as="h2"
          y={40}
          className="mb-16 mt-24 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 sm:mt-32 md:mb-28 md:mt-40"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Education
        </FadeIn>
        <Timeline items={EDUCATION} />
      </section>

      <section
        className="relative z-10 -mt-10 rounded-t-[40px] px-5 pb-24 pt-20 sm:-mt-12 sm:pb-32 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
        style={{ background: '#0C0C0C' }}
      >
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </FadeIn>
        <div className="mx-auto mt-12 flex max-w-5xl flex-col sm:mt-16 md:mt-20">
          {SKILLS.map((skill, i) => (
            <FadeIn
              key={skill.group}
              delay={i * 0.05}
              y={20}
              className="grid gap-4 py-6 sm:grid-cols-[1fr_3fr] sm:items-center sm:gap-10 sm:py-8"
              style={{
                borderTop: i === 0 ? '1px solid rgba(215, 226, 234, 0.15)' : undefined,
                borderBottom: '1px solid rgba(215, 226, 234, 0.15)',
              }}
            >
              <span className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2vw, 1.6rem)' }}>
                {skill.group}
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border-2 border-[#D7E2EA] px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-6 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn
          as="h2"
          y={40}
          className="hero-heading mt-24 text-center font-black uppercase leading-none tracking-tight sm:mt-32"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
        >
          I speak
        </FadeIn>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:mt-14 sm:grid-cols-3">
          {SPOKEN_LANGUAGES.map((lang, i) => (
            <FadeIn key={lang.name} delay={i * 0.1} className="flex flex-col items-center gap-1 text-center">
              <span className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1.25rem, 2.6vw, 2.2rem)' }}>
                {lang.name}
              </span>
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {lang.level}
              </span>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
